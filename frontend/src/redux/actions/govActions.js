import { FETCH_GOV } from "./types";
import { getGov } from "../../services/govService";

export const fetchGov = id => dispatch => {
  getGov(id).then(({ data }) =>
    dispatch({
      type: FETCH_GOV,
      payload: data
    })
  );
};
