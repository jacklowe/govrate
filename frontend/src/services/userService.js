import http from "./httpService";
import { apiUrl } from "../config";

const apiEndpoint = `${apiUrl}/users`;

export function register(email, username, password) {
  return http.post(apiEndpoint, {
    email: email,
    username: username,
    password: password
  });
}
