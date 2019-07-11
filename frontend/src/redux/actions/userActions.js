import { FETCH_USER } from "./types";
import { getCurrentUser } from "../../services/authService";

export const fetchUser = () => dispatch => {
  const user = getCurrentUser();
  return dispatch({
    type: FETCH_USER,
    payload: user
  });
};
