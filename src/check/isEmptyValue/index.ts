/**
 * 对数据进行判空处理
 */
export default (value: any) => {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return true;
  }

  if (value == 'null') {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (typeof value === 'object' && !Object.keys(value).length) {
    return true;
  }

  if (typeof value === 'number' && value == 0) {
    return false;
  }

  return false;
};
