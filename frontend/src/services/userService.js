import http from "./httpService";
import { apiUrl } from "../config";

const apiEndpoint = `${apiUrl}/users`;

export function register(user) {
  return http.post({
    email: user.username,
    password: user.password,
    username: user.name
  });
}
