const INITIAL_STATE = {
  bands: [],
};

export default function manageBand(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.payload]};

    default:
      return state;
  }
}
