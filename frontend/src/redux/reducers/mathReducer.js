import { MATH_ADD, MATH_SUBTRACT } from "../actions/types";

const initialState = {
  result: 1,
  lastValues: []
};
const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATH_ADD:
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      return state;
    case MATH_SUBTRACT:
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      return state;
    default:
      return state;
  }
};

export default mathReducer;
