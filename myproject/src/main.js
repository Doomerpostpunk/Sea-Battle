import "./style.css";
import { createElement } from "./utils/createElement/createEl.js";
import { shipList2 } from "./utils/shiplist.js";
import { leftBorder } from "./utils/borders.js";
import { rightBorder } from "./utils/borders.js";
import { handleShipPlacement } from "./utils/placementHumanShips/handleShipPlacement.js";
import { startGame } from "./utils/startGame/startGame.js";
import { createBoard } from "./utils/createElement/createGameboard.js";
import { ships } from "./utils/shiplist.js";
import { placeRandomShips } from "./utils/placementAIShips/placeRandomShips.js";
import { setupHumanPlayerTurn } from "./utils/humPlayerTurn.js";
import { aiMove } from "./utils/aiMove.js";
import { exitButton } from "./utils/mainMenu/exitButton.js";
import { menuDiv } from "./utils/mainMenu/menuDiv.js";
import { container } from "./utils/mainMenu/rules.js";
import { startGameContainer } from "./utils/startGameContainer/startGameContainer.js";

const app = document.getElementById("app");
const boardList = Array.from({ length: 100 }, (_, index) => index);
const shipList = new Map();
const boardList2 = Array.from({ length: 100 }, (_, index) => index);
export const main_div = createElement({ elem: "div", className: "main-div" });
export const gameBoard_1 = createElement({
  elem: "div",
  className: "game-board",
});
export const gameBoard_2 = createElement({
  elem: "div",
  className: "game-board",
});
const cellsList = [];
export let player = "hum";
const arr2 = Array.from({ length: 100 }).fill(false);
let dragged = null;
const aiShips = 20;
let mouseover = false;
main_div.appendChild(createBoard(boardList, gameBoard_1));
main_div.appendChild(createBoard(boardList2, gameBoard_2));

//export let isShipRotated = false;

// const handleRotate = (e) => {
//   dragged = e.target;
//   mouseover = true;
// };

shipList2.forEach((ship) => {
  ship.addEventListener("dragstart", (e) => {
    dragged = e.target;
  });
  // ship.addEventListener("mouseover", handleRotate);

  ships.appendChild(ship);
});

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && mouseover) {
//     isShipRotated = !isShipRotated;
//     dragged.style.transform = isShipRotated ? "rotate(90deg)" : "rotate(0deg)";
//   }
// });

gameBoard_1.addEventListener("dragover", (e) => e.preventDefault());

gameBoard_1.addEventListener("drop", (e) => {
  const obj = {
    cel: e.target.id,
  };

  const cell = e.target;
  handleShipPlacement(
    cell,
    dragged,
    gameBoard_1,
    shipList,
    leftBorder,
    rightBorder,
    cellsList,
    obj,
  );
});

placeRandomShips(arr2, gameBoard_2);

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  if (player === "hum") {
    setupHumanPlayerTurn({
      gameBoard_2,
      arr2,
      aiShips,
      player,
      callback: () => aiMove(cellsList),
    });
  }
});
if (location.pathname === "/") {
  app.appendChild(menuDiv);
}
if (location.pathname === "/playWithAI") {
  app.appendChild(main_div);
  app.appendChild(ships);
  app.appendChild(startGameContainer);
  app.appendChild(exitButton);
}
if (location.pathname === "/rules") {
  app.appendChild(container);
  app.appendChild(exitButton);
}
