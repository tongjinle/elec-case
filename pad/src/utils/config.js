// 设备类型
export const DEVICE_CATEGORIES = [
  { name: "BRADY", value: 1 },
  { name: "ICD", value: 2 },
  { name: "CRTP", value: 3 },
  { name: "CRTD", value: 4 }
];

// 植入原因
export const PLANT_REASONS = [
  { name: "病窦", value: 1 },
  { name: "房室传导阻滞", value: 2 },
  { name: "房颤伴长RR间期", value: 3 },
  { name: "心衰", value: 4 },
  { name: "晕厥", value: 5 },
  { name: "心肌病", value: 6 }
];

// 电池
export const BATTERY_STATUS = [
  { name: "OK", value: 1 },
  { name: "ERI", value: 2 }
];

// 随访事件(原因)
export const VISIT_EVENTS = [
  { value: 1, name: "发现心律异常 AT/AF" },
  { value: 2, name: "起搏参数异常" },
  { value: 4, name: "电池状态异常" },
  { value: 8, name: "是否修改设置" }
];
