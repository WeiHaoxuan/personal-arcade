const themeButton = document.querySelector("#theme");
function applyTheme(light) {
  document.documentElement.classList.toggle("light", light);
  if (themeButton) themeButton.setAttribute("aria-pressed", String(light));
}
let savedTheme;
try { savedTheme = localStorage.getItem("arcade-theme"); } catch {}
applyTheme(savedTheme === "light");
themeButton?.addEventListener("click", () => {
  const light = !document.documentElement.classList.contains("light");
  applyTheme(light);
  try { localStorage.setItem("arcade-theme", light ? "light" : "dark"); } catch {}
});
