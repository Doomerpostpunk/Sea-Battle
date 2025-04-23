import { createElement } from "./createEl.js";

export const startGame = createElement({
  elem: "button",
  title: "Start Game",
  className: "startGame",
  atr: { name: "disabled", type: "true" },
});
