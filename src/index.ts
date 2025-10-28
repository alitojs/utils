// 通用
export { default as getRandom } from './common/getRandom'; // 生成随机数
export { default as formatWithCommas } from './common/formatWithCommas'; // 数字转换为每三位一个逗号的格式
export { default as percentCut } from './common/percentCut'; // 百分比区分成左右
export { default as voiceAnnouncements } from './common/voiceAnnouncements'; // 语音播报
export { default as simpleDebounce } from './common/simpleDebounce'; // 简单实现防抖方法
export { default as getGenderByIdNumber } from './common/getGenderByIdNumber'; // 按身份证号码获取性别
export { default as getAgeByIdNumber } from './common/getAgeByIdNumber'; // 根据身份证获取年龄
export { default as underLine2CamelCase } from './common/underLineToCamelCase'; // 下划线转驼峰
export { default as getIEVersion } from './common/getIEVersion'; // 下划线转驼峰
export { default as convertCurrency } from './common/convertCurrency'; // 下划线转驼峰
export { default as filterObj } from './common/filterObj'; // 过滤对象中为空的属性

// 脱敏
export { default as getSecretPhone } from './desensitize/getSecretPhone'; // 手机号脱敏
export { default as getSecretIdNumber } from './desensitize/getSecretIdNumber'; // 身份证号脱敏
export { default as getSecretName } from './desensitize/getSecretName'; // 姓名脱敏

// 时间
export { default as getDateRegion } from './time/getDateRegion'; // 得到两个日期之间的天数 YYYY-MM-DD - YYYY-MM-DD
export { default as minutesToTime } from './time/minutesToTime'; // 得到两个日期之间的天数 YYYY-MM-DD - YYYY-MM-DD
export { default as timeToMinutes } from './time/timeToMinutes'; // 得到两个日期之间的天数 YYYY-MM-DD - YYYY-MM-DD

// 地图
export { default as wgs84ToGcj02 } from './map/wgsToGcj'; // GCJ02(火星坐标系) 转GPS84
export { default as gcj02toWgs84 } from './map/gcjToWgs'; // GCJ02(火星坐标系) 转GPS84

// 判断
export { default as isEmptyValue } from './check/isEmptyValue'; // 对数据进行判空处理
export { default as isEmail } from './check/isEmail'; // 对数据进行判空处理
export { default as isMobile } from './check/isMobile'; // 对数据进行判空处理
export { default as isPhone } from './check/isPhone'; // 对数据进行判空处理
export { default as isURL } from './check/isURL'; // 对数据进行判空处理

// 文件处理
export { default as fileToBase } from './file/fileToBase'; // 将图片转化为 base64 的格式
export { default as dataUrlToFile } from './file/dataUrlToFile'; // 将 url 转 file