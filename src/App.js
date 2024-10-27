import { RacingGame, UserInterface } from './class/index.js';
import { SCRIPT } from './constants/interfaceScript.js';

class App {
  async run() {
    const nameString = await UserInterface.processStringInput(SCRIPT.NAME_STRING_INPUT);
    const numberOfAttempts = await UserInterface.processNumberInput(SCRIPT.NUMBER_OF_ATTEMPT_INPUT);

    const racingGame = new RacingGame(nameString);
    const winner = racingGame.play(numberOfAttempts);
    UserInterface.print(SCRIPT.WINNER_IS + winner);
  }
}

export default App;
