import http from "./httpService";

const apIEndpoint = "http://localhost:3900/api/movies";
export function getMovies() {
  return http.get(apIEndpoint);
}

export function deleteMovie(id) {
  return  http.delete(apIEndpoint + "/" + id);;
}
