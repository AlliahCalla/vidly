import http from "./httpService";
import { apiUrl } from "../config.json";

const apIEndpoint = apiUrl + "/auth";

export function login(email, password){
    return http.post(apIEndpoint, {email, password})
}