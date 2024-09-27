/**
 * 设置随机值
 */
export default function getRandom() {
  const val = `${Math.random().toString(36).slice(2, 6)}`;
  return val;
}
