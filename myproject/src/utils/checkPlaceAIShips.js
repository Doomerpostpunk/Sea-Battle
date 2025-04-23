export const canRandPlace = (id, length, arr2, direction) => {
  for (let i = 0; i < length; i++) {
    const index = direction === "horizontal" ? id + i : id + i * 10;
    if (index >= 100 || arr2[index]) {
      return false; // нельзя разместить корабль
    }
    const neighbors = [
      index - 1,
      index + 1,
      index - 10,
      index + 10,
      index - 11,
      index - 9,
      index + 9,
      index + 11,
    ];
    for (const neighbor of neighbors) {
      if (neighbor >= 0 && neighbor < 100 && arr2[neighbor]) {
        return false;
      }
    }
  }
  return true;
};
