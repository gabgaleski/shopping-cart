export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const apiItem = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const formation = await apiItem.json();
  return formation;
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  const API = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const formation = await API.json();
  const result = await formation.results;
  return result;
};
