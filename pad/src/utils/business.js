import axios from "axios";
const host = "localhost";
const port = "80";
const prefix = `//${host}:${port}`;

export function login(name, password) {
  return axios.post("/elecase/sessions/", { name, password });
}
