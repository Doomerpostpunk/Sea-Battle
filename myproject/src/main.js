import "./style.css";
import { createElement } from "./utils/createEl.js";
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
});
const elem = createElement({
  elem: "div",
  title:'1',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem.setAttribute('data-length','1')

const elem2 = createElement({
  elem: "div",
  title:'1',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem2.setAttribute('data-length','1')
const elem3 = createElement({
  elem: "div",
  title:'1',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem3.setAttribute('data-length','1')
const elem4 = createElement({
  elem: "div",
  title:'1',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem4.setAttribute('data-length','1')
const elem5 = createElement({
  elem: "div",
  title:'2',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem5.setAttribute('data-length','2')
const elem6 = createElement({
  elem: "div",
  title:'2',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem6.setAttribute('data-length','2')
const elem7 = createElement({
  elem: "div",
  title:'2',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem7.setAttribute('data-length','2')
const elem8 = createElement({
  elem: "div",
  title:'3',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem8.setAttribute('data-length','3')
const elem9 = createElement({
  elem: "div",
  title:'3',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem9.setAttribute('data-length','3')
const elem10 = createElement({
  elem: "div",
  title:'4',
  className: "ship",
  atr: { name: "draggable", type: "true"},
});
elem10.setAttribute('data-length', '4')
ships.appendChild(elem)
ships.appendChild(elem2)
ships.appendChild(elem3)
ships.appendChild(elem4)
ships.appendChild(elem5)
ships.appendChild(elem6)
ships.appendChild(elem7)
ships.appendChild(elem8)
ships.appendChild(elem9)
ships.appendChild(elem10)


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
    if (cell.classList.contains('game-item') && dragged) {
      const shipLength = parseInt(dragged.getAttribute('data-length'));
      let startIndex = Array.from(gameBoard_1.children).indexOf(cell);
      let canPlace = true;
      for (let i = 0; i < shipLength; i++) {
        const nextCell = gameBoard_1.children[startIndex + i];
        if (!nextCell || !nextCell.classList.contains('game-item')) {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = 0; i < shipLength; i++) {
          const nextCell = gameBoard_1.children[startIndex + i];
          nextCell.style.backgroundColor = '#007bff';
          nextCell.textContent = dragged.getAttribute('data-length');
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

