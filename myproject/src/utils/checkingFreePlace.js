export const canPlaceShip = (neighbors, gameBoard, shipList) => {
  let canPlace = true;
  neighbors.forEach((index) => {
    if (index >= 0 && index < gameBoard.children.length) {
      const neighborCell = gameBoard.children[index];
      if (
        !neighborCell.classList.contains("game-item") ||
        shipList.has(neighborCell.id)
      ) {
        canPlace = false;
      }
    }
  });

  return canPlace;
};
