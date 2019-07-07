import http from "./httpService";

export function getGov(id) {
  return http.get(`http://localhost:8080/api/govs/${id}`);
}

export function getGovs() {
  return http.get(`http://localhost:8080/api/govs`);
}
