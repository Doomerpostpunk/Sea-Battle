import "./style.css";
import { createElement } from "./utils/createEl.js";
import { shipList2 } from "./utils/shiplist.js";
import { leftBorder } from "./utils/borders.js";
import { rightBorder } from "./utils/borders.js";
import { handleShipPlacement } from "./utils/handleShipPlacement.js";
import { startGame } from "./utils/startGame.js";
import { createBoard } from "./utils/createGameboard.js";
import { ships } from "./utils/shiplist.js";
import { placeRandomShips } from "./utils/placeRandomShips.js";
import { uniqFromArray, uniqueRandomNum } from "./utils/uniqRandomNumbers.js";
import { uniqArr } from "./utils/uniqRandomNumbers.js";
import { setupHumanPlayerTurn } from "./utils/humPlayerTurn.js";
import { attic } from "./utils/borders.js";
import { basement } from "./utils/borders.js";

const app = document.getElementById("app");
const boardList = Array.from({ length: 100 }, (_, index) => index);
const shipList = new Map();
const boardList2 = Array.from({ length: 100 }, (_, index) => index);
const main_div = createElement({ elem: "div", className: "main-div" });
const gameBoard_1 = createElement({ elem: "div", className: "game-board" });
const gameBoard_2 = createElement({
  elem: "div",
  className: "game-board",
});
const cellsList = [];
let humanShips = 20;
let aiShips = 20;
let player = "hum";
const arr2 = Array.from({ length: 100 }).fill(false);
let dragged = null;
let mouseover = false;
main_div.appendChild(createBoard(boardList, gameBoard_1));
main_div.appendChild(createBoard(boardList2, gameBoard_2));
app.appendChild(main_div);

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

app.appendChild(ships);

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
app.appendChild(ships);
app.appendChild(startGame);

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

const aiMove = (shipList, neighborCellsArr = []) => {
  console.log({ neighborCellsArr });
  if (neighborCellsArr.length) {
    console.log({ neighborCellsArr });
    const randomNumber = uniqFromArray(neighborCellsArr);

    if (!randomNumber) {
      console.log("Нет доступных соседей для выбора.");
      return;
    }
    console.log({ randomNumber });
    if (shipList.includes(randomNumber)) {
      humanShips = humanShips - 1;
      console.log("humShips", humanShips);
      if (humanShips === 0) {
        alert("Defeat Human");
      }
      gameBoard_1.children[randomNumber].style.backgroundColor = "red";

      const modifiedShipList = (ships) => {
        return ships.map((shipCell) => {
          return shipCell + 1;
        });
      };
      aiMove(shipList, modifiedShipList(neighborCellsArr));
      return;
    }
    neighborCellsArr = neighborCellsArr.filter(
      (number) => number !== randomNumber,
    );
    aiMove(shipList, neighborCellsArr);
    return;
  }

  const randCell = uniqueRandomNum(uniqArr);
  console.log(uniqArr.sort((a, b) => a - b));
  console.log("randCell", randCell);
  gameBoard_1.children[randCell].style.backgroundColor = "green";
  if (shipList.includes(randCell)) {
    humanShips = humanShips - 1;
    console.log("humShips", humanShips);
    if (humanShips === 0) {
      alert("Defeat Human");
    }
    gameBoard_1.children[randCell].style.backgroundColor = "red";
    const neighbors = [
      randCell - 1,
      randCell + 1,
      randCell - 10,
      randCell + 10,
    ];
    const validNeighbors = neighbors.filter((n) => shipList.includes(n));
    if (
      (attic.includes(randCell) && randCell !== 0) ||
      (basement.includes(randCell) && randCell !== 99) ||
      randCell === 0 ||
      randCell === 99
    ) {
      let filteredNeighbors = [];

      if (randCell === 0) {
        filteredNeighbors = validNeighbors.filter(
          (n) => n === randCell + 1 || n === randCell + 10,
        );
      } else if (randCell === 99) {
        filteredNeighbors = validNeighbors.filter(
          (n) => n === randCell - 1 || n === randCell - 10,
        );
      } else if (attic.includes(randCell) && randCell !== 0) {
        filteredNeighbors = validNeighbors.filter((n) => n !== randCell - 10);
      } else if (basement.includes(randCell) && randCell !== 99) {
        filteredNeighbors = validNeighbors.filter((n) => n !== randCell + 10);
      }
      if (filteredNeighbors.length > 0) {
        neighborCellsArr.push(...filteredNeighbors);
        console.log(neighborCellsArr);
        aiMove(shipList, neighborCellsArr);
      }
    }
  }
  player = "hum";
};
