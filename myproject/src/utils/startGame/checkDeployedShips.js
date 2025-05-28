import { ships } from "../shiplist.js";
import { startGame } from "./startGame.js";

export const checkDeployedShips = () => {
  const ship = ships.querySelectorAll(".ship");
  if (ship.length === 1) {
    startGame.disabled = false;
    startGame.style.color = "green";
  }
};
