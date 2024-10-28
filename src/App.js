import parseCarNames from './controllers/car.js';
import startGame from './controllers/game.js';
import { getCarNamesInput, getRoundCountInput } from './controllers/input.js';
import { validateRoundCount } from './validators/validator.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const carNames = parseCarNames(carNamesInput);

    const roundCountInput = await getRoundCountInput();
    const roundCount = validateRoundCount(roundCountInput);

    await startGame(carNames, roundCount);
  }
}

export default App;
