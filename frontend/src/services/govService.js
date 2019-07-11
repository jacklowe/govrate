import http from "./httpService";
import { apiUrl } from "../config";

export function getGov(id) {
  return http.get(`${apiUrl}/govs/${id}`);
}

export function getGovs() {
  return http.get(`${apiUrl}/govs`);
}
