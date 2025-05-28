import { canRandPlace } from "./checkNeighborsAIShips.js";

export const checkPlaceAIShips = (id, length, arr2, gameBoard_2, direction) => {
  if (canRandPlace(id, length, arr2, direction)) {
    for (let i = 0; i < length; i++) {
      const index = direction === "horizontal" ? id + i : id + i * 10;
      arr2[index] = true;
      console.log(arr2);
      const item = gameBoard_2.children[index];
      item.classList.add("occupied");
      item.innerText = length;
    }
    return true;
  }
  return false;
};
