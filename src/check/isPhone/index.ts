/**
 * 电话号码
 */
export default (s: string) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
