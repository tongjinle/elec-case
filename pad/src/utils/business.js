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

// 患者-随访列表
export function patientVisitsSchedule(id) {
  return createRequest().get("/elecase/visits/patient/" + id);
}

// 随访详情
export function visitDetail(id) {
  return createRequest().get("/elecase/visits/" + id);
}

// 上次随访详情
export function lastVisitDetail(id) {
  return createRequest().get("/elecase/visits/patient/last/" + id);
}

// 首页统计
export function stat() {
  return createRequest().get("/elecase/homes");
}

// 搜索患者
export function search(keyword) {
  return createRequest().get("elecase/patients/name/" + keyword);
}

// 获取厂家
export function factories() {
  return createRequest().get("elecase/factories");
}

// 获取医生
export function doctors() {
  return createRequest().get("elecase/doctors");
}

// 新增患者
export function addPatient(data) {
  return createRequest().post("elecase/patients", data);
}

// 编辑患者
export function editPatient(data) {
  return createRequest().put("elecase/patients/", data);
}

// 查找患者
export function patient(id) {
  return createRequest().get("elecase/patients/" + id);
}

// 上传图片
export function uploadImage(file) {
  console.log("upload image");
  let fd = new FormData();
  fd.append("image", file);
  let headers = { "Content-Type": "multipart/form-data" };
  return createRequest().post("elecase/res/image", fd, { headers });
}

// 获取图片
export function getImage(id) {
  // todo
  return prefix + "/elecase/res/image/" + id;
  // 下面这局仅仅是为了展示
  // 生产环境用上面的
  // return prefix + "/elecase/res/image/abc1567540360443_429";
}

// 新增随访
export function addVisit(patientId, data) {
  return createRequest().post("elecase/visits/patient/" + patientId, data);
}

export function setVisitData(data) {
  console.log(data);
  localStorage.setItem("visitData", JSON.stringify(data));
}

export function getVisitData() {
  let str = localStorage.getItem("visitData");
  return str ? JSON.parse(str) : {};
}

// 预约日期的计算
export function date(weekday, months) {
  let timestr = timeToString(new Date());
  return createRequest().get(
    `elecase/patients/date/${timestr}/${weekday}/${months}`
  );
}

export function timeToString(time) {
  let padding = num => (100 + num + "").slice(1);
  return [
    time.getFullYear(),
    padding(time.getMonth() + 1),
    padding(time.getDate())
  ].join("-");
}
