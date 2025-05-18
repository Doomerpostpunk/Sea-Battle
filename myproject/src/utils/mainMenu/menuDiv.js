import { createElement } from "../createElement/createEl.js";
import { playWithAIButton } from "./playWithAIButton.js";
import { rulesButton } from "./rulesButton.js";

export const menuDiv = createElement({
  elem: "div",
  className: "menuDiv",
});
export const image = createElement({
  elem: "div",
  className: "image",
});

export const menuText = createElement({
  elem: "h1",
  className: "menuText",
  title: "SEA BATTLE",
});
image.appendChild(menuText);
image.appendChild(playWithAIButton);
image.appendChild(rulesButton);

menuDiv.appendChild(image);
