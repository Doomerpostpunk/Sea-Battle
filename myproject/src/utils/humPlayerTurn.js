export const setupHumanPlayerTurn = ({
  gameBoard_2,
  arr2,
  aiShips,
  player,
  callback,
}) => {
  let click = false;

  const humPlayerEvent=(event)=>{
    const cell = event.target.closest(".game-item");
    if (!cell) return;
    if (!click) {
      const cellId = Number(event.target.id);
      console.log(cellId);
      if (arr2[cellId] && event.target.style.backgroundColor !== "red") {
        event.target.style.backgroundColor = "red";
        event.target.style.fontSize = "30px";
        aiShips = aiShips - 1;
        console.log({ numbers2: aiShips });
      } else if (!arr2[cellId]) {
        event.target.style.backgroundColor = "green";
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
  }
  gameBoard_2.addEventListener("click",humPlayerEvent);
};
