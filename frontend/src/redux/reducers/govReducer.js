import { FETCH_GOV } from "../actions/types";

const initialState = {
  gov: {}
};

const govReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOV:
      return {
        ...state.gov,
        gov: action.payload
      };
    default:
      return state;
  }
};

export default govReducer;
