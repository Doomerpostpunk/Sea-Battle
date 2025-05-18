import { createElement } from "../createElement/createEl.js";
import { exitButton } from "./exitButton.js";
import { menuDiv } from "./menuDiv.js";
import { container } from "./rules.js";

export const rulesButton = createElement({
  elem: "button",
  title: "Rules",
  className: "rulesButton",
});
rulesButton.addEventListener("click", () => {
  menuDiv.style.display = "none";
  exitButton.style.display = "block";
  container.style.display = "block";
});
