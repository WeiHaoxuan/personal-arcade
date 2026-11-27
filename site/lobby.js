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
document.querySelector("#projects").replaceChildren(...projects.map(projectCard));
