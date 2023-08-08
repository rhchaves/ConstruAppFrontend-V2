export interface CommonStoreStateInterface {
  loading: boolean;
  categories: Array<object>;
}

function state(): CommonStoreStateInterface {
  return {
    loading: false,
    categories: [],
  }
}

export default state;
