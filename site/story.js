const scenes = {
  gate: ["晚自习后", "风从操场吹来，一张点歌单落在鞋尖上。背面只写着：给今晚最后一个回宿舍的人。", [["去广播站", "radio"], ["去操场", "field"]]],
  radio: ["亮着灯的窗口", "值班同学正在收拾唱片。看见点歌单，她又坐回麦克风前，把另一把椅子推给你。", [["一起报幕", "voice"], ["把歌送给操场", "song"]]],
  field: ["看台最后一排", "一个背着吉他的同学正翻遍口袋。你把纸递过去，他试了试弦，问你想在哪里听。", [["留在看台", "stars"], ["带他去广播站", "song"]]],
  voice: ["结局 · 第一次播音", "你把话筒拉近，说出了开场白。第二天，那把椅子上贴了一张便签：周五还来吗？", []],
  song: ["结局 · 今晚的安可", "歌声从喇叭里响起来。跑道上的人慢下脚步，听完最后一个和弦才各自回去。", []],
  stars: ["结局 · 两个人的演出", "操场的灯按时熄灭，吉他却多响了一分钟。这场演出只有一个听众。", []]
};
const heading = document.querySelector("#scene");
function showScene(key, focusHeading) {
  const [title, text, options] = scenes[key];
  heading.textContent = title;
  document.querySelector("#story").textContent = text;
  const choices = options.length ? options : [["再走一遍", "gate"]];
  document.querySelector("#choices").replaceChildren(...choices.map(([label, next]) => {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = label;
    button.onclick = () => showScene(next, true);
    return button;
  }));
  if (focusHeading) heading.focus();
}
showScene("gate", false);
