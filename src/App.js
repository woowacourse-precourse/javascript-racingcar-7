import { Console } from '@woowacourse/mission-utils';
import { Interface, RacingGame } from './class/index.js';
import { SCRIPT } from './constants/interfaceScript.js';

class App {
  constructor() {
    this.read = Console.readLineAsync;
    this.print = Console.print;
  }

  async run() {
    const nameString = await Interface.processStringInput(SCRIPT.NAME_STRING_INPUT);
    const numberOfAttempts = await Interface.processNumberInput(SCRIPT.NUMBER_OF_ATTEMPT_INPUT);

    const racingGame = new RacingGame(nameString);
    const winner = racingGame.play(numberOfAttempts);
    this.print(SCRIPT.WINNER_IS + winner);
  }
}

export default App;
