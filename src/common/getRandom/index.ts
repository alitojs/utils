/**
 * 设置随机值
 */
export default (length: number = 4) => {
  const val: string = `${Math.random().toString().slice(0, length)}`;
  return val;
};
