import { playRoundGame, setRoundData, getWinner } from "./features/features.js";
import {  printTitle, printRound, printWinner } from "./features/handleOutput.js";

export const playRacingGame = (userList, roundNum) => {
  // 1. Set round data
  let roundData = setRoundData(userList);

  // 2. Play round game
  printTitle();
  for (let round = 0; round < roundNum; round++) {
    roundData = playRoundGame(roundData);
    printRound(roundData);
  }

  // 3. Get winner
  let winnerList = getWinner(roundData);
  printWinner(winnerList);
};
