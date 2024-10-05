/**
 * 将图片转化为 base64 的格式
 */
export default (file: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const { result } = e.target;
      resolve({
        result,
      });
    };
  });
};
