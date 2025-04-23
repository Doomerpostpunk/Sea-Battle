import { createElement } from "./createEl.js";
const elem = createElement({
  elem: "div",
  title: "1",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem.setAttribute("data-length", "1");

const elem2 = createElement({
  elem: "div",
  title: "1",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem2.setAttribute("data-length", "1");
const elem3 = createElement({
  elem: "div",
  title: "1",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem3.setAttribute("data-length", "1");
const elem4 = createElement({
  elem: "div",
  title: "1",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem4.setAttribute("data-length", "1");
const elem5 = createElement({
  elem: "div",
  title: "2",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem5.setAttribute("data-length", "2");
const elem6 = createElement({
  elem: "div",
  title: "2",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem6.setAttribute("data-length", "2");
const elem7 = createElement({
  elem: "div",
  title: "2",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem7.setAttribute("data-length", "2");
const elem8 = createElement({
  elem: "div",
  title: "3",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem8.setAttribute("data-length", "3");
const elem9 = createElement({
  elem: "div",
  title: "3",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem9.setAttribute("data-length", "3");
const elem10 = createElement({
  elem: "div",
  title: "4",
  className: "ship",
  atr: { name: "draggable", type: "true" },
});
elem10.setAttribute("data-length", "4");

export const ships = createElement({
  elem: "div",
  className: "ships",
  atr: {
    type: "id",
    name: "ships",
  },
});

export const shipList2 = [];
shipList2.push(elem);
shipList2.push(elem2);
shipList2.push(elem3);
shipList2.push(elem4);
shipList2.push(elem5);
shipList2.push(elem6);
shipList2.push(elem7);
shipList2.push(elem8);
shipList2.push(elem9);
shipList2.push(elem10);
//
// export const draggedShips = () => {
//   shipList2.forEach((div) => {
//     div.addEventListener("dragstart", (e) => (dragged = e.target));
//     ships.appendChild(div);
//   });
