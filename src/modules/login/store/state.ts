export interface LoginStateInterface {
  loading: boolean;
  logado: boolean;
  token: null | string;
  user: Record<string, any>;
  client: Record<string, any>;
}

function state(): LoginStateInterface {
  return {
    loading: false,
    logado: false,
    token: null,
    user: {},
    client: {},
  }
}

export default state;
