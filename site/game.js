const play = document.querySelector("#play");
const display = document.querySelector("#display");
const message = document.querySelector("#message");
let start = null;

play.addEventListener("click", () => {
  if (start === null) {
    start = performance.now();
    display.textContent = "•••";
    message.textContent = "正在计时，觉得到了就按下停止。";
    play.textContent = "停止计时";
    return;
  }

  const hundredths = Math.round((performance.now() - start) / 10);
  start = null;
  const seconds = (hundredths / 100).toFixed(2);
  const difference = hundredths - 1000;
  const offset = (Math.abs(difference) / 100).toFixed(2);
  let result = "刚好十秒！";
  if (difference !== 0) {
    result = (difference < 0 ? "早了 " : "晚了 ") + offset + " 秒。";
  }
  display.textContent = seconds;
  message.textContent = "用了 " + seconds + " 秒，" + result;
  play.textContent = "再玩一次";
});
