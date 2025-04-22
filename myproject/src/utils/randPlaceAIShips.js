import { canRandPlace } from "./checkPlaceAIShips.js";

export const randPlace = (id, length, arr2, gameBoard_2) => {
  if (canRandPlace(id, length, arr2)) {
    for (let i = 0; i < length; i++) {
      const index = id + i;
      arr2[index] = true;
      const item = gameBoard_2.children[index];
      item.classList.add("occupied");
      item.innerText = length;
    }
    return true;
  }
  return false;
};
