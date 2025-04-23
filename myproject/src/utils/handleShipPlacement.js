import { canPlaceShipAt } from "./canPlaceShipAt.js";
import { checkDeployedShips } from "./checkDeployedShips.js";
import { isShipRotated } from "../main.js";

export const handleShipPlacement = (
  cell,
  dragged,
  gameBoard,
  shipList,
  leftBorder,
  rightBorder,
  cellsList,
  obj,
) => {
  if (!cell.classList.contains("game-item") || !dragged) {
    return;
  }

  const shipLength = parseInt(dragged.getAttribute("data-length"));
  const startIndex = Array.from(gameBoard.children).indexOf(cell);

  // Проверяем можно ли разместить корабль с учетом поворота
  const canPlace = canPlaceShipAt(
    startIndex,
    shipLength,
    gameBoard,
    shipList,
    leftBorder,
    rightBorder,
    isShipRotated,
  );

  if (canPlace) {
    for (let i = 0; i < shipLength; i++) {
      // Выбираем следующую ячейку с учетом поворота
      const nextCellIndex = isShipRotated
        ? startIndex + i * 10 // вертикально (шаг = 10, т.к. поле 10x10)
        : startIndex + i; // горизонтально

      const nextCell = gameBoard.children[nextCellIndex];

      nextCell.classList.add("activeCell");
      nextCell.textContent = dragged.getAttribute("data-length");
      shipList.set(nextCell.id, obj);
      cellsList.push(Number(nextCell.id));
    }

    checkDeployedShips();
    dragged.parentNode.removeChild(dragged);
    isShipRotated = false; // сбрасываем поворот после размещения
  }
};
