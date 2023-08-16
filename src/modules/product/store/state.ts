export interface ProductStateInterface {
  loading: boolean;
  product: object;

}

function state(): ProductStateInterface {
  return {
    loading: false,
    product: {},

  };
}

export default state;
