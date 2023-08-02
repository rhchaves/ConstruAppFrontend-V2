export interface ClientPageStateInterface {
  loading: boolean;

}

function state(): ClientPageStateInterface {
  return {
    loading: false,

  };
}

export default state;
