export interface ProductStateInterface {
  loading: boolean;
  allProducts: Array<object>;
  productsByCategory: Array<object>;
  productsByName: Array<object>;
  productDetail: object;
  logado: boolean;
  cep: Array<string>;

}

function state(): ProductStateInterface {
  return {
    loading: false,
    allProducts: [],
    productsByCategory: [],
    productsByName: [],
    productDetail: {},
    logado: false,
    cep: [],

  };
}

export default state;
