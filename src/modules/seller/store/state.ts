export interface SellerPageStateInterface {
  loading: boolean;

}

function state(): SellerPageStateInterface {
  return {
    loading: false,

  };
}

export default state;
