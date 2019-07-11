import { FETCH_GOV } from "../actions/types";

const initialState = {
  currentGov: {}
};

const govReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOV:
      return {
        ...state.currentGov,
        currentGov: action.payload
      };
    default:
      return state;
  }
};

export default govReducer;
