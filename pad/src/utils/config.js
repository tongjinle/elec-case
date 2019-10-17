export let env = "dev";
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
  { name: "OK", value: "1" },
  { name: "ERI", value: "2" }
];

// 随访事件(原因)
export const VISIT_EVENTS = [
  { value: 1, name: "发现心律异常 AT/AF" },
  { value: 2, name: "起搏参数异常" },
  { value: 4, name: "电池状态异常" },
  { value: 8, name: "是否修改设置" }
];

// 随访类型
export const VISIT_TYPES = [
  { value: 1, name: "常规" },
  { value: 2, name: "不适随访" },
  { value: 3, name: "HIS随访" }
];

// 起搏模式
export const MODES = [
  { value: "1", name: "VVI" },
  { value: "2", name: "VVIR" },
  { value: "3", name: "AAI" },
  { value: "4", name: "AAIR" },
  { value: "5", name: "DDD" },
  { value: "6", name: "DDDR" },
  { value: "7", name: "AAIR<=>DDDR" },
  { value: "8", name: "AAI<=>DDD" }
];

// 极性
export const POLARS = [
  { value: "单", name: "单" },
  { value: "双", name: "双" }
];
