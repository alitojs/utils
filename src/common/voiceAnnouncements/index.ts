/**
 * 语音播报
 */
export default (text: string) => {
  const synth = window.speechSynthesis; // 启用文本
  const msg = new SpeechSynthesisUtterance();
  msg.text = text; // 内容
  msg.lang = 'zh-CN'; // 使用的语言:中文
  msg.volume = 1; // 声音音量：1
  msg.rate = 1; // 语速：1
  msg.pitch = 1; // 音高：1
  synth.speak(msg); // 播放
};
