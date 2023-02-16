export const getAddress = async () => {
  const getCep = document.querySelector('.cep-input');
  const cep = getCep.value;
  const getSpan = document.querySelector('.cart__address');
  try {
    const firstAPI = (`https://cep.awesomeapi.com.br/json/${cep}`);
    const secondAPI = (`https://brasilapi.com.br/api/cep/v2/${cep}`);
    const promises = await Promise.any([fetch(firstAPI), fetch(secondAPI)]);
    if (!promises.ok) {
      getSpan.innerHTML = 'CEP não encontrado';
      return;
    }
    const result = promises.json();
    return result;
  } catch (error) {
    getSpan.innerHTML = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const getSpan = document.querySelector('.cart__address');
  const data = await getAddress();
  const { address, district, city, state, street, neighborhood } = data;
  if (address) {
    getSpan.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    return;
  }
  getSpan.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
};
