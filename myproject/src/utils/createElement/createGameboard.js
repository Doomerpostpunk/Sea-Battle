import { createElement } from "./createEl.js";

export const createBoard = (boardList, gameBoard_1) => {
  boardList.forEach((el) => {
    const item = createElement({
      elem: "div",
      className: "game-item",
      atr: { name: "id", type: el },
    });
    gameBoard_1.appendChild(item);
  });
  return gameBoard_1;
};
