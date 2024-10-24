import { readRound, readUsers } from "./gameSetting/features/handleInput.js";
import { setRoundNum, setUserList } from "./gameSetting/gameSetting.js";
import { playRacingGame } from "./racingGame/racingGame.js";

class App {
  async run() {
    const userInput = await readUsers();
    const userList = setUserList(userInput);

    const roundInput = await readRound();
    const roundNum = setRoundNum(roundInput);

    playRacingGame(userList, roundNum);
  }
}

export default App;
