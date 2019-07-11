import { FETCH_USER } from "../actions/types";

const initialState = {
  currentUser: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state.currentUser,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
