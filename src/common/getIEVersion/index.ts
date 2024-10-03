/**
 * 设置随机值
 */

export function isIEFunction() {
  return navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1;
}

export function isIE11Function() {
  return navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1;
}

// 判断是否IE的Edge浏览器
export function isEdgeFunction() {
  return navigator.userAgent.indexOf('Edge') > -1 && !isIEFunction();
}

export default (length: number = 4) => {
  let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  let isIE: boolean = isIEFunction();
  let isIE11: boolean = isIE11Function();
  let isEdge: boolean = isEdgeFunction();

  if (isIE) {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion === 7 || fIEVersion === 8 || fIEVersion === 9 || fIEVersion === 10) {
      return fIEVersion;
    } else {
      return 6; // IE版本<7
    }
  } else if (isEdge) {
    return 'edge';
  } else if (isIE11) {
    return 11;
  } else {
    return -1;
  }
};
