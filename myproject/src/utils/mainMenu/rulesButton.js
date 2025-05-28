import { createElement } from "../createElement/createEl.js";
import { exitButton } from "./exitButton.js";
import { menuDiv } from "./menuDiv.js";
import { container } from "./rules.js";

export const rulesButton = createElement({
  elem: "a",
  title: "Rules",
  className: "rulesButton",
  atr: { name: "href", type: "/rules" },
});
