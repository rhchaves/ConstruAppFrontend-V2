export interface AdministratorStateInterface {
  loading: boolean;

}

function state(): AdministratorStateInterface {
  return {
    loading: false,

  };
}

export default state;
