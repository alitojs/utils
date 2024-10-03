/**
 * URL地址
 */
export default (s: string) => {
  return /^http[s]?:\/\/.*/.test(s);
};
