import { createElement } from "../createElement/createEl.js";
import { startGame } from "../startGame/startGame.js";

export const startGameContainer = createElement({
  elem: "div",
  className: "startGameContainer",
});
const tooltip = createElement({
  elem: "div",
  className: "tooltip",
  title: "Расставьте корабли!",
});

startGameContainer.appendChild(startGame);
startGameContainer.appendChild(tooltip);
startGameContainer.addEventListener("mouseenter", () => {
  tooltip.style.display = "block";
  const rect = startGame.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
});

startGameContainer.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});
