export interface ShoppingCartStateInterface {
  loading: boolean;
  cart: Array<object>;
}

function state(): ShoppingCartStateInterface {
  return {
    loading: false,
    cart: [],
  };
}

export default state;
