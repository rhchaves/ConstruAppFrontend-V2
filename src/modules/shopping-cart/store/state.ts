export interface ShoppingCartStateInterface {
  loading: boolean;

}

function state(): ShoppingCartStateInterface {
  return {
    loading: false,

  };
}

export default state;
