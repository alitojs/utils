/**
 * 身份证号脱敏
 */
export default (idNumber: string) => {
  if (!idNumber) {
    return '';
  }
  idNumber = String(idNumber);
  let strs = '',
    beforeLength = idNumber.substr(0, idNumber.length - 4).length;
  for (let i = 0; i < beforeLength; i++) {
    strs += '*';
  }
  return strs + idNumber.substr(-4);
};
