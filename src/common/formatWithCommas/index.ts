/**
 * 数字转换为每三位一个逗号的格式
 */
export default (number: string | number) => {
  if (number == null || number == undefined) return undefined;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
