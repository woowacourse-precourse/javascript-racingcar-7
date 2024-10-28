import { RacingGame } from './models/index.js';
import { UserInterface } from './utils/index.js';
import { UI_MESSAGES } from './constants/uiMessages.js';

class App {
  async run() {
    const nameString = await UserInterface.processStringInput(UI_MESSAGES.NAME_STRING_INPUT);
    const numberOfAttempts = await UserInterface.processNumberInput(UI_MESSAGES.NUMBER_OF_ATTEMPT_INPUT);

    const racingGame = new RacingGame(nameString);
    const winner = racingGame.play(numberOfAttempts);
    UserInterface.print(UI_MESSAGES.WINNER_IS + winner);
  }
}

export default App;
