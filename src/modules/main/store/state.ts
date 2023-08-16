export interface MainStateInterface {
  loading: boolean;
  logado: boolean;
  cep: Array<string>;
  allProducts: Array<object>;
  productsByCategory: Array<object>;
  productsByName: Array<object>;
}

function state(): MainStateInterface {
  return {
    loading: false,
    logado: false,
    cep: [],
    allProducts: [],
    productsByCategory: [],
    productsByName: [],
  };
}

export default state;
