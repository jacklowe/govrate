import http from "./httpService";
import { apiUrl } from "../config";

export function getReviews(id) {
  return http.get(`${apiUrl}/govs/${id}/reviews`);
}
