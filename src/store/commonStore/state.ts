export interface CommonStorageStateInterface {
  loading: boolean;
  categories: Array<object>;
}

function state(): CommonStorageStateInterface {
  return {
    loading: false,
    categories: [],
  }
}

export default state;
