import { createElement } from "../createElement/createEl.js";

export const exitButton = createElement({
  elem: "a",
  title: "EXIT",
  className: "exitButton",
  atr: { name: "href", type: "/" },
});
