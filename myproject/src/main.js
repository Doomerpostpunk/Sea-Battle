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

const fragment = new DocumentFragment();

const elem = createElement({
  elem: "div",
  className: "dd",
  atr: { name: "draggable", type: "true" },
});

const elem2 = createElement({
  elem: "div",
  className: "dd",
  atr: { name: "draggable", type: "true" },
});
const elem3 = createElement({
  elem: "div",
  className: "dd2",
  atr: { name: "draggable", type: "true" },
});
let dragged = null;

elem.addEventListener("dragstart", (e) => (dragged = e.target));
elem3.append(elem2);
elem3.append(elem);
gameBoard_1.addEventListener("dragover", (e) => e.preventDefault());

gameBoard_1.addEventListener("drop", (e) => {
  const obj = {
    cel: e.target.id,
  };

  shipList.set(e.target.id, obj);
  console.log(shipList);
  dragged.setAttribute("id", e.target.id);
  e.target.appendChild(dragged);
});
gameBoard_1.addEventListener("click", (event) => {
  console.log(event.target.id);

  if (shipList.has(event.target.id)) {
    event.target.style.backgroundColor = "green";
  }
});

console.log(fragment);
app.appendChild(elem);
app.appendChild(elem3);
