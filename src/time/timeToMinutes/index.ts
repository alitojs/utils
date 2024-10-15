/**
 * 时间转分钟数
 */
export default (timeString: string) => {
  if (!timeString || timeString == null) {
    return 0;
  }
  const parts: string[] = timeString.split(':');
  const hours: number = parseInt(parts[0], 10);
  const minutes: number = parseInt(parts[1], 10);
  const seconds: number = parseInt(parts[2], 10);
  return hours * 60 + minutes + seconds / 60;
};
