export const setupHumanPlayerTurn = ({
  gameBoard_2,
  arr2,
  aiShips,
  player,
  callback,
}) => {
  let click = false;
  gameBoard_2.addEventListener("click", (event) => {
    if (!click) {
      if (
        arr2[Number(event.target.id)] &&
        event.target.style.backgroundColor !== "green"
      ) {
        event.target.style.backgroundColor = "green";
        event.target.style.fontSize = "30px";
        aiShips = aiShips - 1;
        console.log({ numbers2: aiShips });
      }
      click = true;
      if (aiShips === 0) {
        alert("Defeat AI");
      } else {
        click = false;
        player = "ai";
        callback();
      }
    }
  });
};
