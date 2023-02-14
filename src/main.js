import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

function listGenerate(component) {
  const array = fetchProductsList(component);
  array.then((data) => data.forEach((element) => {
    const { id, title, thumbnail, price } = element;
    const newProduct = createProductElement({ id, title, thumbnail, price });
    products.appendChild(newProduct);
  }));
}
listGenerate('computador');
