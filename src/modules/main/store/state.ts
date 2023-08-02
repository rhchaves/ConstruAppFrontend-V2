export interface MainStateInterface {
  loading: boolean;
  logado: boolean;
  cep: Array<string>;
  products: Array<object>;
}

function state(): MainStateInterface {
  return {
    loading: false,
    logado: false,
    cep: [],
    products: [],
  };
}

export default state;
