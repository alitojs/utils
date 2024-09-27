// 通用
export { default as getRandom } from './common/getRandom'; // 生成随机数

// 脱敏
export { default as getSecretPhone } from './desensitize/getSecretPhone'; // 手机号脱敏

// 时间
export { default as getDateRegion } from './time/getDateRegion'; // 得到两个日期之间的天数 YYYY-MM-DD - YYYY-MM-DD

// 地图
export { default as wgs84ToGcj02 } from './map/wgsToGcj'; // GCJ02(火星坐标系) 转GPS84