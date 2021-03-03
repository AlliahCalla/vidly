import http from "./httpService";
import { apiUrl } from "../config.json";

const apIEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apIEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
