import { MATH_ADD, MATH_SUBTRACT } from "../actions/actionTypes";

const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
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
