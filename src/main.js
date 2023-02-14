import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

async function listGenerate(component) {
  const array = await fetchProductsList(component);
  array.forEach((element) => {
    const { id, title, thumbnail, price } = element;
    const newProduct = createProductElement({ id, title, thumbnail, price });
    products.appendChild(newProduct);
  });
}

async function createLoading() {
  const loading = document.createElement('section');
  loading.className = 'loading';
  loading.innerHTML = 'carregando...';
  products.appendChild(loading);
  await listGenerate('computador');
  products.removeChild(loading);
}

window.onload = () => {
  createLoading();
};
