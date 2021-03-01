import http from "./httpService";
import { apiUrl } from "../config.json";
import { ErrorBoundary } from "@sentry/react";

const apIEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apIEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apIEndpoint);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apIEndpoint, movie);
}
