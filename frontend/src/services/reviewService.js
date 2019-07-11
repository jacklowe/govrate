import http from "./httpService";
import { apiUrl } from "../config";

export function getReviews(govId) {
  return http.get(`${apiUrl}/govs/${govId}/reviews`);
}

export function postReview(rating, body, govId) {
  return http.post(`${apiUrl}/govs/${govId}/reviews`, {
    rating: rating,
    body: body
  });
}
