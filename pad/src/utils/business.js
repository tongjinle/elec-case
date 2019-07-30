import axios from "axios";
const host = "39.105.78.216";
const port = "8081";
const prefix = `//${host}:${port}`;

export function login(name, password) {
  return axios.post(prefix + "/elecase/sessions/", { name, password });
}
