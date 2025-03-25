import "./style.css";
import { createElement } from "./utils/createEl.js";
import { shipList2 } from "./utils/shiplist.js";
import { leftBorder } from "./utils/borders.js";
import { rightBorder } from "./utils/borders.js";
import { canPlaceShip } from "./utils/checking.js";
import { getNeighbors } from "./utils/neighbors.js";
const app = document.getElementById("app");
const boardList = Array.from({ length: 100 }, (_, index) => index + 1);
const shipList = new Map();
const boardList2 = Array.from({ length: 100 });
const main_div = createElement({ elem: "div", className: "main-div" });
const gameBoard_1 = createElement({ elem: "div", className: "game-board" });
const gameBoard_2 = createElement({ elem: "div", className: "game-board" });
const arr = [];
const arr2 = Array(100).fill(false);
let numbers = 20;
boardList.forEach((el) => {
  const item = createElement({
    elem: "div",
    className: "game-item",
    atr: { name: "id", type: el },
  });
  gameBoard_1.appendChild(item);
});
boardList2.forEach(() => {
  const item = createElement({ elem: "div", className: "game-item" });
  gameBoard_2.appendChild(item);
});
main_div.appendChild(gameBoard_1);
main_div.appendChild(gameBoard_2);
app.appendChild(main_div);

const ships = createElement({
  elem: "div",
  className: "ships",
  atr: {
    type: "id",
    name: "ships",
  },
});

shipList2.forEach((div) => {
  div.addEventListener("dragstart", (e) => (dragged = e.target));
  ships.appendChild(div);
});

app.appendChild(ships);

let dragged = null;

gameBoard_1.addEventListener("dragover", (e) => e.preventDefault());

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
      const isLeftBorder = leftBorder.includes(currentCell + 1);
      const isRightBorder = rightBorder.includes(currentCell + 1);

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
        arr.push(nextCell.id);
        console.log(arr);
      }
      dragged.parentNode.removeChild(dragged);
    }
  }
});
gameBoard_1.addEventListener("click", (event) => {
  console.log(event.target.id);

  if (
    shipList.has(event.target.id) &&
    event.target.style.backgroundColor !== "green"
  ) {
    event.target.style.backgroundColor = "green";
    numbers = numbers - 1;
    console.log(numbers);
  }
  if (numbers === 0) {
    alert("Defeat");
  }
});

const canRandPlace = (id, length) => {
  for (let i = 0; i < length; i++) {
    const index = id + i;
    if (index >= 100 || arr2[index] || (id % 10) + length > 10) return false;

    const neighbors = [
      index - 1,
      index + 1,
      index - 10,
      index + 10,
      index - 11,
      index - 9,
      index + 9,
      index + 11,
    ];
    for (const neighbor of neighbors) {
      if (neighbor >= 0 && neighbor < 100 && arr2[neighbor]) {
        return false;
      }
    }
  }
  return true;
};
const randPlace = (id, length) => {
  if (canRandPlace(id, length)) {
    for (let i = 0; i < length; i++) {
      const index = id + i;
      arr2[index] = true;
      const item = gameBoard_2.children[index];
      item.classList.add("occupied");
      item.innerText = length;
    }
    return true;
  }
  return false;
};

const placeRandomShips = () => {
  const ships = [
    { length: 4, count: 1 },
    { length: 3, count: 2 },
    { length: 2, count: 3 },
    { length: 1, count: 4 },
  ];

  ships.forEach((ship) => {
    for (let i = 0; i < ship.count; i++) {
      let placed = false;
      while (!placed) {
        const startIndex = Math.floor(Math.random() * 100);
        placed = randPlace(startIndex, ship.length);
      }
    }
  });
};
placeRandomShips();
app.appendChild(ships);
