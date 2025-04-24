import {uniqArr, uniqFromArray, uniqueRandomNum} from "./uniqRandomNumbers.js";
import {attic, basement} from "./borders.js";
import {gameBoard_1} from "../main.js";
import {player} from "../main.js";
import {gameBoard_2} from "../main.js";
import {setupHumanPlayerTurn} from "./humPlayerTurn.js";

let humanShips = 20;
export const aiMove = (shipList, neighborCellsArr = []) => {
    console.log({ neighborCellsArr });
    if (neighborCellsArr.length) {
        console.log({ neighborCellsArr });
        const randomNumber = uniqFromArray(neighborCellsArr);

        if (!randomNumber) {
            console.log("Нет доступных соседей для выбора.");
            return;
        }
        console.log({ randomNumber });
        if (shipList.includes(randomNumber)) {
            humanShips = humanShips - 1;
            console.log("humShips", humanShips);
            if (humanShips === 0) {
                alert("Defeat Human");

            }
            gameBoard_1.children[randomNumber].style.backgroundColor = "red";

            const modifiedShipList = (ships) => {
                return ships.map((shipCell) => {
                    return shipCell + 1;
                });
            };
            aiMove(shipList, modifiedShipList(neighborCellsArr));
            return;
        }
        neighborCellsArr = neighborCellsArr.filter(
            (number) => number !== randomNumber,
        );
        aiMove(shipList, neighborCellsArr);
        return;
    }

    const randCell = uniqueRandomNum(uniqArr);
    console.log(uniqArr.sort((a, b) => a - b));
    console.log("randCell", randCell);
    gameBoard_1.children[randCell].style.backgroundColor = "green";
    if (shipList.includes(randCell)) {
        humanShips = humanShips - 1;
        console.log("humShips", humanShips);
        if (humanShips === 0) {
            alert("Defeat Human");
            gameBoard_2.removeEventListener('click',setupHumanPlayerTurn)
        }
        gameBoard_1.children[randCell].style.backgroundColor = "red";
        const neighbors = [
            randCell - 1,
            randCell + 1,
            randCell - 10,
            randCell + 10,
        ];
        const validNeighbors = neighbors.filter((n) => shipList.includes(n));
        if (
            (attic.includes(randCell) && randCell !== 0) ||
            (basement.includes(randCell) && randCell !== 99) ||
            randCell === 0 ||
            randCell === 99
        ) {
            let filteredNeighbors = [];

            if (randCell === 0) {
                filteredNeighbors = validNeighbors.filter(
                    (n) => n === randCell + 1 || n === randCell + 10,
                );
            } else if (randCell === 99) {
                filteredNeighbors = validNeighbors.filter(
                    (n) => n === randCell - 1 || n === randCell - 10,
                );
            } else if (attic.includes(randCell) && randCell !== 0) {
                filteredNeighbors = validNeighbors.filter((n) => n !== randCell - 10);
            } else if (basement.includes(randCell) && randCell !== 99) {
                filteredNeighbors = validNeighbors.filter((n) => n !== randCell + 10);
            }
            if (filteredNeighbors.length > 0) {
                neighborCellsArr.push(...filteredNeighbors);
                console.log(neighborCellsArr);
                aiMove(shipList, neighborCellsArr);
            }
        }
    }
    player = "hum";
};
