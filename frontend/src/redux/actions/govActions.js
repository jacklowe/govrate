import { FETCH_GOV } from "./types";

export function fetchGov(id) {
  return {
    type: FETCH_GOV,
    payload: id
  };
}
