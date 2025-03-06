import "./style.css";
import { createElement } from "./utils/createEl.js";
import { shipList2 } from "./utils/shiplist.js";
const app = document.getElementById("app");
const boardList = Array.from({ length: 100 }, (_, index) => index + 1);
const shipList = new Map();
window.addEventListener("storage", () => {
  console.log(localStorage.getItem("ship"));
});
const boardList2 = Array.from({ length: 100 });
const main_div = createElement({ elem: "div", className: "main-div" });
const gameBoard_1 = createElement({ elem: "div", className: "game-board" });
const gameBoard_2 = createElement({ elem: "div", className: "game-board" });
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
  atr: {
    type: "id",
    name: "ships",
  },
});

shipList2.forEach((ship) => {
  ships.appendChild(`<div>${JSON.stringify(ship)}</div>`);
});

app.appendChild(ships);

let dragged = null;
elem.addEventListener("dragstart", (e) => (dragged = e.target));
elem2.addEventListener("dragstart", (e) => (dragged = e.target));
elem3.addEventListener("dragstart", (e) => (dragged = e.target));
elem4.addEventListener("dragstart", (e) => (dragged = e.target));
elem5.addEventListener("dragstart", (e) => (dragged = e.target));
elem6.addEventListener("dragstart", (e) => (dragged = e.target));
elem7.addEventListener("dragstart", (e) => (dragged = e.target));
elem8.addEventListener("dragstart", (e) => (dragged = e.target));
elem9.addEventListener("dragstart", (e) => (dragged = e.target));
elem10.addEventListener("dragstart", (e) => (dragged = e.target));
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
    for (let i = 0; i < shipLength; i++) {
      const nextCell = gameBoard_1.children[startIndex + i];
      if (
        !nextCell ||
        !nextCell.classList.contains("game-item") ||
        shipList.has(e.target.id)
      ) {
        canPlace = false;
        break;
      }
    }

    if (canPlace) {
      for (let i = 0; i < shipLength; i++) {
        const nextCell = gameBoard_1.children[startIndex + i];
        nextCell.style.backgroundColor = "#007bff";
        nextCell.textContent = dragged.getAttribute("data-length");
        shipList.set(nextCell.id, obj);
        dragged.setAttribute("id", e.target.id);
        e.target.appendChild(dragged);
      }

      dragged.parentNode.removeChild(dragged);
    }
  }
});
gameBoard_1.addEventListener("click", (event) => {
  console.log(event.target.id);

  if (shipList.has(event.target.id)) {
    event.target.style.backgroundColor = "green";
  }
});

app.appendChild(ships);
