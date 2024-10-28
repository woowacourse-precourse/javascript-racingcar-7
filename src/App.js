import { getUserInput } from './utils/Console.js';
import { parseCarNames, parseAttempt } from './utils/Parser.js';
import CarNameValidator from './validators/CarNameValidator.js';
import validateAttempt from './validators/AttemptValidator.js';
import RacingGame from './RacingGame.js';
import RaceStatusDisplay from './RaceStatusDisplay.js';
import { GAME_MESSAGE } from './constants/Message.js';

class App {
  async run() {
    const userInputCarNames = await getUserInput(GAME_MESSAGE.INPUT_CAR_NAME);

    const carNameList = parseCarNames(userInputCarNames);
    CarNameValidator.validate(carNameList);

    const userInputAttempt = await getUserInput(GAME_MESSAGE.INPUT_ATTEMPT);

    const roundAttempt = parseAttempt(userInputAttempt);
    validateAttempt(roundAttempt);

    const racingGame = new RacingGame(carNameList, roundAttempt);
    racingGame.startRace();

    const winners = racingGame.getWinners();
    RaceStatusDisplay.printWinners(winners);
  }
}

export default App;
