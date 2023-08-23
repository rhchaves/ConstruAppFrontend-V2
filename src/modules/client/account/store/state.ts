export interface AccountPageStateInterface {
  loading: boolean;

}

function state(): AccountPageStateInterface {
  return {
    loading: false,

  };
}

export default state;
