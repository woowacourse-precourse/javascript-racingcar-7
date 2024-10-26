import prepareCarNames from './controllers/carContoller.js';
import startGame from './controllers/gameController.js';
import {
  getCarNamesInput,
  getRoundCount,
} from './controllers/inputController.js';
import { validateRoundCount } from './validators/validator.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const roundCountInput = await getRoundCount();

    const carNames = prepareCarNames(carNamesInput);
    const roundCount = validateRoundCount(roundCountInput);

    await startGame(carNames, roundCount);
  }
}

export default App;
