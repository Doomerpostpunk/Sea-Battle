import { getNeighbors } from "./neighbors.js";
import { canPlaceShip } from "./checkingFreePlace.js";
import { leftBorder } from "./borders.js";

export const canPlaceShipAt = (
  startIndex,
  shipLength,
  gameBoard,
  shipList,

  rightBorder,
  isShipRotated,
) => {
  if ((startIndex % 10) + shipLength > 10) {
    return false;
  }

  for (let i = 0; i < shipLength; i++) {
    const cellIndex = isShipRotated ? startIndex + i * 10 : startIndex + i;
    const nextCell = gameBoard.children[cellIndex];
    if (
      !nextCell ||
      !nextCell.classList.contains("game-item") ||
      shipList.has(nextCell.id)
    ) {
      return false;
    }
  }
  for (let i = 0; i < shipLength; i++) {
    const cellIndex = isShipRotated ? startIndex + i * 10 : startIndex + i;
    const isLeftBorder = leftBorder.includes(cellIndex);
    const isRightBorder = rightBorder.includes(cellIndex);

    const neighbors = getNeighbors(cellIndex, isLeftBorder, isRightBorder);

    if (!canPlaceShip(neighbors, gameBoard, shipList)) {
      return false;
    }
  }
  return true;
};
