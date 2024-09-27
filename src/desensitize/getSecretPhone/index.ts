/**
 * 手机号脱敏
 */
export default (idNumber: string) => {
  if (idNumber) {
    idNumber = `${idNumber}`;
    return idNumber.replace(/^(.{3})(?:\d+)(.{3})$/, '$1*****$2');
  } else {
    return '';
  }
};
