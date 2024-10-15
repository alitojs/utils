/**
 * 分钟数转时间
 */
export default (minutes: string | number) => {
  if (!minutes || minutes == null) {
    return '00:00:00';
  }
  let hours = Math.floor(parseInt(`${minutes}`, 10) / 60);
  let mins = parseInt(`${minutes}`, 10) % 60;
  let time = ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':00';
  return time;
};
