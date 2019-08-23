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

// 随访类型
export const VISIT_TYPES = [
  { value: 1, name: "常规" },
  { value: 2, name: "不适随访" },
  { value: 3, name: "HIS随访" }
];

// 预计寿命
export const DURATIONS = [
  { value: 1, name: ">1" },
  { value: 2, name: ">2" },
  { value: 3, name: ">3" },
  { value: 4, name: ">4" },
  { value: 5, name: ">5" },
  { value: 6, name: ">6" },
  { value: 7, name: ">7" },
  { value: 8, name: ">8" },
  { value: 9, name: ">9" },
  { value: 10, name: ">10" }
];

// 电极阈值
export const THRESHOLDS = [
  { value: "0.5", name: "0.5" },
  { value: "1", name: "1" },
  { value: "2", name: "2" },
  { value: "3", name: "3" },
  { value: "4", name: "4" },
  { value: "5", name: "5" },
  { value: "6", name: "6" },
  { value: "7", name: "7" }
];

// 电极脉宽
export const PULSEWIDTHS = [
  { value: "0.4", name: "0.4" },
  { value: "0.5", name: "0.5" },
  { value: "0.6", name: "0.6" },
  { value: "0.7", name: "0.7" },
  { value: "0.8", name: "0.8" },
  { value: "0.9", name: "0.9" },
  { value: "1.0", name: "1.0" },
  { value: "1.1", name: "1.1" },
  { value: "1.2", name: "1.2" },
  { value: "1.3", name: "1.3" },
  { value: "1.4", name: "1.4" },
  { value: "1.5", name: "1.5" }
];

// 电极感知
export const PERCEPTIONS = [
  { value: "0.1", name: "0.1" },
  { value: "0.2", name: "0.2" },
  { value: "0.3", name: "0.3" },
  { value: "0.4", name: "0.4" },
  { value: "0.5", name: "0.5" },
  { value: "1", name: "1" },
  { value: "2", name: "2" },
  { value: "3", name: "3" },
  { value: "4", name: "4" },
  { value: "5", name: "5" },
  { value: "6", name: "6" },
  { value: "7", name: "7" },
  { value: "8", name: "8" },
  { value: "9", name: "9" },
  { value: ">10", name: ">10" }
];

// 起搏模式
export const MODES = [{ value: "1", name: "1" }, { value: "2", name: "2" }];

// 低限频率
export const DOWNS = [{ value: "1", name: "1" }, { value: "2", name: "2" }];

// 上限频率
export const UPS = [{ value: "1", name: "1" }, { value: "2", name: "2" }];

// 输出电压
export const OUTPUT_VOLTAGES = [
  { value: "1", name: "1" },
  { value: "2", name: "2" }
];
// 输出脉宽
export const OUTPUT_PULSESWIDTHS = [
  { value: "1", name: "1" },
  { value: "2", name: "2" }
];
// 输出灵敏度
export const OUTPUT_PERCEPTIONS = [
  { value: "1", name: "1" },
  { value: "2", name: "2" }
];
