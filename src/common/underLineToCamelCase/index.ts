/**
 * 下划线转驼峰
 * @param string
 * @returns {*}
 */
export default (str: string): any => {
  return str.replace(/_([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
};
