/**
 * 根据身份证获取年龄
 */
export default (IDCord: string) => {
  // 获取用户身份证号码
  let userCard = IDCord;
   let age: number = 0;
  // 如果用户身份证号码为undefined则返回空
  if (!userCard) {
    return age;
  }

  let yearBirth : number = parseInt(userCard.substring(6, 10), 10),
    monthBirth: number = parseInt(userCard.substring(10, 12), 10),
    dayBirth: number = parseInt(userCard.substring(12, 14), 10),
    // 获取当前年月日并计算年龄
    myDate = new Date(),
    monthNow = myDate.getMonth() + 1,
    dayNow = myDate.getDate();
  age = myDate.getFullYear() - yearBirth;
  if (monthNow < monthBirth || (monthNow == monthBirth && dayNow < dayBirth)) {
    age--;
  }
  // 返回 年龄
  return age;
};
