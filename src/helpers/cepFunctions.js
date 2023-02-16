export const getAddress = async () => {
  const getCep = document.querySelector('.cep-input');
  const cep = getCep.value;
  try {
    const firstAPI = (`https://cep.awesomeapi.com.br/json/${cep}`);
    const secondAPI = (`https://brasilapi.com.br/api/cep/v2/${cep}`);
    const promises = await Promise.any([fetch(firstAPI), fetch(secondAPI)]);
    const result = await promises.json();
    return result;
  } catch {
    return 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const getSpan = document.querySelector('.cart__address');
  const data = await getAddress();
  if (!data.city) {
    getSpan.innerHTML = 'CEP não encontrado';
    return;
  }
  const { address, district, city, state, street, neighborhood } = data;
  if (address) {
    getSpan.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    return;
  }
  getSpan.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
};
