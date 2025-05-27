import { createElement } from "../createElement/createEl.js";
import { exitButton } from "./exitButton.js";

export const container = createElement({ elem: "div", className: "container" });
const h1 = createElement({
  elem: "h1",
  className: "h1",
  title: "Правила Морского Боя",
});
const section = createElement({ elem: "section", className: "section" });
const firstHeader = createElement({
  elem: "h2",
  title: "Игровое поле",
});
const p1 = createElement({
  elem: "p",
  className: "p",
  title:
    "Каждому игроку предоставляется квадратное поле размером 10x10 клеток ",
});
const p2 = createElement({
  elem: "p",
  className: "p",
  title:
    "Поле делится на две части: одна для размещения собственных кораблей, другая — для отметок попаданий и промахов по кораблям противника.",
});
section.appendChild(firstHeader);
section.appendChild(p1);
section.appendChild(p2);
const section2 = createElement({ elem: "section", className: "section" });

const secondHeader = createElement({
  elem: "h2",
  title: "Корабли",
});
const p3 = createElement({
  elem: "p",
  className: "p",
  title:
    "Каждый игрок размещает свои корабли на своем поле. Стандартный набор кораблей включает:",
});
const ul = createElement({
  elem: "ul",
});
const li1 = createElement({ elem: "li", title: "1 четырехпалубный корабль" });
const li2 = createElement({ elem: "li", title: "2 трехпалубных корабля" });
const li3 = createElement({ elem: "li", title: "3 двухпалубных корабля" });
const li4 = createElement({ elem: "li", title: "4 однопалубных корабля" });
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
const p4 = createElement({
  elem: "p",
  className: "p",
  title:
    "Корабли могут располагаться только вертикально или горизонтально и не могут пересекаться или касаться друг друга.",
});
section2.appendChild(secondHeader);
section2.appendChild(p3);
section2.appendChild(ul);
section2.appendChild(p4);

const section3 = createElement({ elem: "section", className: "section" });
const thirdHeader = createElement({
  elem: "h2",
  title: "Начало игры",
});
const p5 = createElement({
  elem: "p",
  className: "p",
  title:
    'Игроки по очереди делают ходы, называя координаты (например, "C5"), чтобы попытаться попасть в корабль противника.',
});
const p6 = createElement({
  elem: "p",
  className: "p",
  title:
    'Противник сообщает, попал ли выстрел (если попал — "да", если нет — "нет").',
});
section3.appendChild(thirdHeader);
section3.appendChild(p5);
section3.appendChild(p6);

const section4 = createElement({ elem: "section", className: "section" });
const fourthHeader = createElement({
  elem: "h2",
  title: "Отметки",
});
const p7 = createElement({
  elem: "p",
  className: "p",
  title: "После каждого хода игрок отмечает свои выстрелы на своем поле:",
});
const ul2 = createElement({
  elem: "ul",
});
const li1_2 = createElement({
  elem: "li",
  title: "X — если попал в корабль. ",
});
const li2_2 = createElement({ elem: "li", title: "O — если промахнулся." });
ul2.appendChild(li1_2);
ul2.appendChild(li2_2);
section4.appendChild(fourthHeader);
section4.appendChild(p7);
section4.appendChild(ul2);

const section5 = createElement({ elem: "section", className: "section" });
const fifthHeader = createElement({
  elem: "h2",
  title: "Потопление кораблей",
});
const p8 = createElement({
  elem: "p",
  className: "p",
  title:
    "Когда все клетки одного из кораблей противника поражены, он считается потопленным. Противник должен объявить, что его корабль потоплен.",
});
section5.appendChild(fifthHeader);
section5.appendChild(p8);

const section6 = createElement({ elem: "section", className: "section" });
const sixthHeader = createElement({
  elem: "h2",
  title: "Победа",
});
const p9 = createElement({
  elem: "p",
  className: "p",
  title:
    "Игра продолжается до тех пор, пока один из игроков не потопит все корабли противника. Этот игрок объявляется победителем.",
});
section6.appendChild(sixthHeader);
section6.appendChild(p9);
container.appendChild(h1);
container.appendChild(section);
container.appendChild(section2);
container.appendChild(section3);
container.appendChild(section4);
container.appendChild(section5);
container.appendChild(section6);
