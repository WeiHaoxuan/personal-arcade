const pad = document.querySelector("#pad");
const beat = document.querySelector("#beat");
const feedback = document.querySelector("#feedback");
const patterns = [[360, 720, 360], [600, 300, 600], [360, 360, 720]];
let round = 0;
let phase = "ready";
let taps = [];
let audio;

async function demonstrate() {
  phase = "listen";
  pad.textContent = "仔细听…";
  let audible = false;
  try {
    audio ??= new AudioContext();
    await audio.resume();
    audible = audio.state === "running";
  } catch {
    // The numbered beat display also supports silent play.
  }
  feedback.textContent = audible ? "听完四拍，再轮到你。" : "跟着屏幕记住四拍。";
  let delay = 180;
  for (let i = 0; i < 4; i++) {
    if (audible) {
      const tone = audio.createOscillator();
      const gain = audio.createGain();
      const start = audio.currentTime + delay / 1000;
      tone.frequency.value = i === 0 ? 660 : 440;
      gain.gain.setValueAtTime(0.14, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
      tone.connect(gain).connect(audio.destination);
      tone.start(start);
      tone.stop(start + 0.13);
    }
    setTimeout(() => { beat.textContent = String(i + 1); }, delay);
    delay += patterns[round][i] ?? 450;
  }
  setTimeout(() => {
    taps = [];
    phase = "tap";
    beat.textContent = "0 / 4";
    pad.textContent = "敲一下";
    feedback.textContent = "轮到你了，从第一下开始算。";
  }, delay);
}

pad.addEventListener("click", () => {
  if (phase === "ready") {
    demonstrate();
    return;
  }
  if (phase !== "tap") return;
  taps.push(performance.now());
  beat.textContent = taps.length + " / 4";
  if (taps.length < 4) return;

  const errors = patterns[round].map((gap, i) => Math.abs(taps[i + 1] - taps[i] - gap));
  const average = Math.round(errors.reduce((sum, error) => sum + error, 0) / errors.length);
  beat.textContent = average + " ms";
  feedback.textContent = "三个拍间隔平均相差 " + average + " 毫秒，越小越准。";
  phase = "ready";
  round = (round + 1) % patterns.length;
  pad.textContent = "挑战下一组";
});
