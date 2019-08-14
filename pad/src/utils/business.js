import axios from "axios";
const host = "39.105.78.216";
const port = "8081";
const prefix = `//${host}:${port}`;

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function login(name, password) {
  return axios.post(prefix + "/elecase/sessions/", { name, password });
}

export function logout() {
  return createRequest().delete("/elecase/sessions/");
}

function createRequest(token) {
  return axios.create({
    baseURL: prefix,
    headers: { token: getToken() }
  });
}

// 首页-随访列表
export function visitsSchedule(id) {
  return createRequest().get("/elecase/visits/schedule/" + id);
}

// 首页统计
export function stat() {
  return createRequest().get("/elecase/homes");
}
