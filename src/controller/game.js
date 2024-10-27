import InputView from '../view/input-view.js';
import GAME_MESSAGE from '../constant/message.js';
import validateCarName from '../validation/validate-carname.js';
import validateAttemptCount from '../validation/validate-attempt-count.js';
import Race from '../model/race.js';
import OutputView from '../view/output-view.js';

class Game {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async process() {
    const carNamesInput = await this.inputView.getCarNames(GAME_MESSAGE.CAR_NAMES_INPUT);
    const carNameList = carNamesInput.split(',');
    validateCarName(carNameList);

    const attemptCountInput = await this.inputView.getAttemptCount(GAME_MESSAGE.ATTEMPT_COUNT_INPUT);
    const attemptCount = parseInt(attemptCountInput, 10);
    validateAttemptCount(attemptCount);

    const race = new Race(carNameList, attemptCount);
    race.run();
  }
}

export default Game;
