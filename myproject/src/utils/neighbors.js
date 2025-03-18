export const getNeighbors = (currentCell, isLeftBorder, isRightBorder) => {
  if (isLeftBorder) {
    return [
      currentCell + 1,
      currentCell - 10,
      currentCell + 10,
      currentCell - 9,
      currentCell + 11,
    ];
  } else if (isRightBorder) {
    return [
      currentCell - 1,
      currentCell - 10,
      currentCell + 10,
      currentCell - 11,
      currentCell + 9,
    ];
  } else {
    return [
      currentCell - 1,
      currentCell + 1,
      currentCell - 10,
      currentCell + 10,
      currentCell - 10 - 1,
      currentCell - 10 + 1,
      currentCell + 10 - 1,
      currentCell + 10 + 1,
    ];
  }
};
