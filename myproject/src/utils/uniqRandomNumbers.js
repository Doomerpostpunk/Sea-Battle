export const uniqArr = [];
export const uniqueRandomNum = () => {
  if (uniqArr.length >= 100) {
    return null;
  }
  let num;
  do {
    num = Math.floor(Math.random() * 100);
  } while (uniqArr.includes(num));

  uniqArr.push(num);
  return num;
};

export const uniqFromArray = (neighborCellsArr) => {
  if (!neighborCellsArr.length) {
    return null;
  }
  const availableNeighbors = neighborCellsArr.filter(
    (neighbor) => !uniqArr.includes(neighbor),
  );
  if (!availableNeighbors.length) {
    return null;
  }
  const randIndex = Math.floor(Math.random() * availableNeighbors.length);
  const randNeighbor = availableNeighbors[randIndex];
  uniqArr.push(randNeighbor);
  return randNeighbor;
};
