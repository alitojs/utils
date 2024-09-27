let pi = 3.1415926535897932384626; // π
let a = 6378245.0; // 长半轴
let ee = 0.00669342162296594323; // 扁率

/**
 * GCJ02(火星坐标系) 转GPS84: param lng: 火星坐标系经度: param lat: 火星坐标系纬度
 */
export default (lng: number, lat: number) => {
  let dlat = transformlat(lng - 105.0, lat - 35.0);
  let dlng = transformlng(lng - 105.0, lat - 35.0);
  let radlat = (lat / 180.0) * pi;
  let magic = Math.sin(radlat);
  magic = 1 - ee * magic * magic;
  let sqrtmagic = Math.sqrt(magic);
  dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * pi);
  dlng = (dlng * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * pi);
  let mglat = lat + dlat;
  let mglng = lng + dlng;
  return [mglng, mglat];
};

function transformlat(lng: number, lat: number) {
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * pi) + 20.0 * Math.sin(2.0 * lng * pi)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lat * pi) + 40.0 * Math.sin((lat / 3.0) * pi)) * 2.0) / 3.0;
  ret += ((160.0 * Math.sin((lat / 12.0) * pi) + 320 * Math.sin((lat * pi) / 30.0)) * 2.0) / 3.0;
  return ret;
}

function transformlng(lng: number, lat: number) {
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * pi) + 20.0 * Math.sin(2.0 * lng * pi)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lng * pi) + 40.0 * Math.sin((lng / 3.0) * pi)) * 2.0) / 3.0;
  ret += ((150.0 * Math.sin((lng / 12.0) * pi) + 300.0 * Math.sin((lng / 30.0) * pi)) * 2.0) / 3.0;
  return ret;
}
