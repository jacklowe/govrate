import { FETCH_GOV } from "./types";
import { getGov } from "../../services/govService";

export const fetchGov = id => async dispatch => {
  const { data: gov } = await getGov(id);
  return dispatch({
    type: FETCH_GOV,
    payload: gov
  });
};
