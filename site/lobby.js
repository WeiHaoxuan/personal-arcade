function projectCard(project) {
  const card = document.createElement("article");
  const screen = document.createElement("div");
  screen.className = "screen";
  screen.setAttribute("aria-hidden", "true");
  screen.textContent = project.sign;
  const panel = document.createElement("div");
  panel.className = "panel";
  const category = document.createElement("small");
  category.textContent = project.category;
  const title = document.createElement("h2");
  title.textContent = project.name;
  const summary = document.createElement("p");
  summary.textContent = project.description;
  const link = document.createElement("a");
  link.className = "button";
  link.href = project.url;
  link.textContent = "玩" + project.name;
  panel.append(category, title, summary, link);
  card.append(screen, panel);
  return card;
}
const filters = document.querySelector("#filters");
const categories = ["全部", ...new Set(projects.map(project => project.category))];
function selectCategory(category) {
  const visible = category === "全部" ? projects : projects.filter(project => project.category === category);
  document.querySelector("#projects").replaceChildren(...visible.map(projectCard));
  document.querySelector("#count").textContent = "共 " + visible.length + " 款游戏";
  for (const button of filters.children) {
    button.setAttribute("aria-pressed", String(button.textContent === category));
  }
}
for (const category of categories) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = category;
  button.onclick = () => selectCategory(category);
  filters.append(button);
}
selectCategory("全部");
