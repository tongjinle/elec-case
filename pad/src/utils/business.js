import axios from "axios";
const host = "39.105.78.216";
const port = "8081";
const prefix = `//${host}:${port}`;

export function loginRequest(name, password) {
  return axios.post(prefix + "/elecase/sessions/", { name, password });
}

export function signoutRequest() {
  return axios.delete(prefix + "/elecase/sessions/");
}

export function homeRequest() {
  return axios.get(prefix + "/elecase/homes/");
}
