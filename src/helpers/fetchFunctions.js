export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (param) => {
  if (param === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const API = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const formation = await API.json();
  const result = await formation.results;
  return result;
};
