/**
 * 过滤对象中为空的属性
 */
export default (obj: Record<string, any> = {}) => {
  if (!(typeof obj == 'object')) {
    return;
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && (obj[key] == null || obj[key] == undefined || obj[key] === '')) {
      delete obj[key];
    }
  }
  return obj;
};
