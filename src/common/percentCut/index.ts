/**
 * 百分比区分成左右
 */
export default (vals: string | number, type: 'before' | 'end' = 'before') => {
  if (type == 'before' && !vals) return '0';
  if (type == 'end' && !vals) return '00';
  const valStr = `${vals}`;
  const list = valStr.split('.');

  if (type == 'before') {
    if (list.length > 0) {
      return list[0];
    }
    return '0';
  } else {
    if (list.length > 1) {
      return list[1];
    }
    return '00';
  }
};
