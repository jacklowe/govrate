import http from "./httpService";

export function getReviews(id) {
  return http.get(`http://localhost:8080/api/govs/${id}/reviews`);
}
