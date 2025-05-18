import { createElement } from "../createElement/createEl.js";
import { exitButton } from "./exitButton.js";
import { ships } from "../shiplist.js";
import { startGame } from "../startGame/startGame.js";
import { menuDiv } from "./menuDiv.js";
import { main_div } from "../../main.js";

export const playWithAIButton = createElement({
  elem: "button",
  title: "Play with AI",
  className: "playWithAIButton",
});

playWithAIButton.addEventListener("click", () => {
  main_div.style.display = "flex";
  exitButton.style.display = "block";
  ships.style.display = "flex";
  startGame.style.display = "block";
  menuDiv.style.display = "none";
});
