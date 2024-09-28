/**
 * 按身份证号码获取性别
 * @idNumber 身份证号码
 * @return 男：1；女：2（根据后端字典值）；异常（身份证号码为空或长度、格式错误）：undefined
 */
export default (idNumber: string) => {
  if (idNumber) {
    let genderCode; // 性别代码
    if (idNumber.length == 18) {
      // 二代身份证号码长度为18位（第17位为性别代码）
      genderCode = idNumber.charAt(16);
    } else if (idNumber.length == 15) {
      // 一代身份证号码长度为15位（第15位为性别代码）
      genderCode = idNumber.charAt(14);
    }
    if (genderCode && !isNaN(parseInt(genderCode))) {
      // 两代身份证号码的性别代码都为男奇女偶
      if (parseInt(genderCode) % 2 == 0) {
        return '2';
      }
      return '1';
    }
  }
  return undefined;
};
