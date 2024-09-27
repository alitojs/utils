/**
 * 姓名脱敏
 */
export default (name: string) => {
  if (!name) {
    return '';
  }
  let newStr: string;
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*';
  } else if (name.length == 3) {
    newStr = name.substr(0, 1) + '**';
  } else if (name.length == 4) {
    newStr = name.substr(0, 2) + '**';
  } else {
    newStr = name;
  }
  return newStr;
};
