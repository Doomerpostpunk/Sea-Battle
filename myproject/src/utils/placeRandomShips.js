import { randPlace } from "./randPlaceAIShips.js";

export const placeRandomShips = (arr2, gameBoard_2) => {
  const ships = [
    { length: 4, count: 1 },
    { length: 3, count: 2 },
    { length: 2, count: 3 },
    { length: 1, count: 4 },
  ];

  ships.forEach((ship) => {
    for (let i = 0; i < ship.count; i++) {
      let placed = false;
      while (!placed) {
        const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
        const startIndex = Math.floor(Math.random() * 100);
        if (
          direction === "horizontal" &&
          (startIndex % 10) + ship.length > 10
        ) {
          continue;
        }
        if (
          direction === "vertical" &&
          startIndex + (ship.length - 1) * 10 >= 100
        ) {
          continue;
        }
        placed = randPlace(
          startIndex,
          ship.length,
          arr2,
          gameBoard_2,
          direction,
        );
      }
    }
  });
};
