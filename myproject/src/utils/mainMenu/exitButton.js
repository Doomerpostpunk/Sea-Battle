import { createElement } from "../createElement/createEl.js";

export const exitButton = createElement({
  elem: "button",
  title: "EXIT",
  className: "exitButton",
});
exitButton.addEventListener("click", () => {
  location.reload();
});
