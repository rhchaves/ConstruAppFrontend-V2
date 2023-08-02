export interface ProductStateInterface {
  loading: boolean;

}

function state(): ProductStateInterface {
  return {
    loading: false,

  };
}

export default state;
