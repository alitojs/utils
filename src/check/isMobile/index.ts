/**
 * 手机号码
 */
export default (s: string) => {
  return /^1[0-9]{10}$/.test(s);
};
