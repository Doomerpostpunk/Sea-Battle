import "./style.css";
import { createElement } from "./utils/createEl.js";
import { shipList2 } from "./utils/shiplist.js";
import { leftBorder } from "./utils/borders.js";
import { rightBorder } from "./utils/borders.js";
import { canPlaceShip } from "./utils/checkingFreePlace.js";
import { getNeighbors } from "./utils/neighbors.js";
import { startGame } from "./utils/startGame.js";
import { createBoard } from "./utils/createGameboard.js";
import { ships } from "./utils/shiplist.js";
import { checkDeployedShips } from "./utils/checkDeployedShips.js";
import { placeRandomShips } from "./utils/placeRandomShips.js";
import { uniqFromArray, uniqueRandomNum } from "./utils/uniqRandomNumbers.js";
import { uniqArr } from "./utils/uniqRandomNumbers.js";
import { setupHumanPlayerTurn } from "./utils/humPlayerTurn.js";
import { cell } from "./utils/borders.js";
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
main_div.appendChild(createBoard(boardList, gameBoard_1));
main_div.appendChild(createBoard(boardList2, gameBoard_2));
app.appendChild(main_div);

shipList2.forEach((div) => {
  div.addEventListener("dragstart", (e) => (dragged = e.target));
  ships.appendChild(div);
});

app.appendChild(ships);

gameBoard_1.addEventListener("dragover", (e) => e.preventDefault());
const canPlaceShipAt = (
  startIndex,
  shipLength,
  gameBoardChildren,
  shipList,
  leftBorder,
  rightBorder,
) => {
  // Проверка выхода за правую границу
  if ((startIndex % 10) + shipLength > 10) {
    return false;
  }

  // Проверка доступности клеток для размещения корабля
  for (let i = 0; i < shipLength; i++) {
    const nextCell = gameBoardChildren[startIndex + i];
    if (
      !nextCell ||
      !nextCell.classList.contains("game-item") ||
      shipList.has(nextCell.id)
    ) {
      return false;
    }
  }

  // Проверка соседних клеток для каждого сегмента корабля
  for (let i = 0; i < shipLength; i++) {
    const currentCell = startIndex + i;
    const isLeftBorder = leftBorder.includes(currentCell);
    const isRightBorder = rightBorder.includes(currentCell);

    const neighbors = getNeighbors(currentCell, isLeftBorder, isRightBorder);

    if (!canPlaceShip(neighbors, gameBoardChildren, shipList)) {
      return false;
    }
  }

  // Если все проверки пройдены — можно разместить корабль
  return true;
};
gameBoard_1.addEventListener("drop", (e) => {
  const obj = {
    cel: e.target.id,
  };

  const cell = e.target;

  if (cell.classList.contains("game-item") && dragged) {
    const shipLength = parseInt(dragged.getAttribute("data-length"));
    let startIndex = Array.from(gameBoard_1.children).indexOf(cell);
    let canPlace = true;

    if ((startIndex % 10) + shipLength > 10) {
      canPlace = false;
    } else {
      for (let i = 0; i < shipLength; i++) {
        const nextCell = gameBoard_1.children[startIndex + i];
        if (
          !nextCell ||
          !nextCell.classList.contains("game-item") ||
          shipList.has(nextCell.id)
        ) {
          canPlace = false;
          break;
        }
      }
    }

    for (let i = 0; i < shipLength; i++) {
      let currentCell = startIndex + i;
      const isLeftBorder = leftBorder.includes(currentCell);
      const isRightBorder = rightBorder.includes(currentCell);

      const neighbors = getNeighbors(currentCell, isLeftBorder, isRightBorder);

      if (!canPlaceShip(neighbors, gameBoard_1, shipList)) {
        canPlace = false;
      }
    }
    if (canPlace) {
      for (let i = 0; i < shipLength; i++) {
        const nextCell = gameBoard_1.children[startIndex + i];
        nextCell.classList.toggle("activeCell");
        nextCell.textContent = dragged.getAttribute("data-length");
        shipList.set(nextCell.id, obj);
        cellsList.push(Number(nextCell.id));
        checkDeployedShips();
      }
      dragged.parentNode.removeChild(dragged);
    }
  }
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
      console.log("humships", humanShips);
      if (humanShips === 0) {
        alert("Defeat Human");
      }
      gameBoard_1.children[randomNumber].style.backgroundColor = "red";
      neighborCellsArr = neighborCellsArr.filter(
        (number) => number !== randomNumber,
      );

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
  console.log("randcell", randCell);
  gameBoard_1.children[randCell].style.backgroundColor = "green";
  if (shipList.includes(randCell)) {
    humanShips = humanShips - 1;
    console.log("humships", humanShips);
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
      (cell.includes(randCell) && randCell !== 0) ||
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
      } else if (cell.includes(randCell) && randCell !== 0) {
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
