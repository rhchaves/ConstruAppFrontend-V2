export interface LoginStateInterface {
  loading: boolean;
  loginStatus: boolean;
  loginData: object;

}

function state(): LoginStateInterface {
  return {
    loading: false,
    loginStatus: false,
    loginData: {},

  }
}

export default state;
