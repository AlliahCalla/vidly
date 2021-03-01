import http from "./httpService";
import { apiUrl } from "../config.json";

const apIEndpoint = apiUrl + "/movies";
export function getMovies() {
  return http.get(apIEndpoint);
}

export function deleteMovie(id) {
  return http.delete(apIEndpoint + "/" + id);
}
