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

export function addPatient(
  name,
  sex,
  birth,
  phone,
  emergContact,
  emergPhone,
  addr,
  doctorId,
  plantReason,
  plantBaseEf,
  plantBaseEfImg,
  plantBaseQrs,
  plantBaseQrsImg,
  factoryId,
  deviceCate,
  deviceNo,
  deviceModel
) {
  let data = {
    name,
    sex,
    birth,
    phone,
    emergContact,
    emergPhone,
    addr,
    treat: {
      doctorId
    },
    psmk: {
      plantReason,
      plantBaseEf,
      plantBaseEfImg,
      plantBaseQrs,
      plantBaseQrsImg,
      factoryId,
      deviceCate,
      deviceNo,
      deviceModel,
      doctorId
    }
  };
  return createRequest().post("elecase/patients", data);
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
export function getImage(id) {}

// 新增随访
export function addVisit({
  nextDate,
  doctorId,
  category,
  batteryStatus,
  duration,
  advise,
  mode,
  up,
  down,
  threshold,
  pulseWidth,
  perception,
  impendance,
  outputVoltage,
  outputPulseWidth,
  outputPerception,
  apRatio,
  vpRatio,
  ataf,
  atafImg,
  efRatio,
  efImg,
  qrsRatio,
  qrsImg,
  events
}) {
  let data = {
    nextDate,
    doctorId,
    category,
    batteryStatus,
    duration,
    advise,
    mode,
    up,
    down,
    threshold,
    pulseWidth,
    perception,
    impendance,
    outputVoltage,
    outputPulseWidth,
    outputPerception,
    apRatio,
    vpRatio,
    ataf,
    atafImg,
    efRatio,
    efImg,
    qrsRatio,
    qrsImg,
    events
  };
  return createRequest().post("elecase/visits/patient/1", data);
}
