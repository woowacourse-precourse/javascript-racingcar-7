import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RacingGame from '../model/RacingGame.js';
import { validateCarNames, validatePositiveInteger } from '../utils/validate.js';

class GameController {
  #racingGame;

  async play() {
    await this.#createRacingGameFromUserInput();
    this.#execute();
  }

  async #createRacingGameFromUserInput() {
    const carNames = await InputView.readCarNames();
    validateCarNames(carNames);

    const tryNumber = await InputView.readTryNumber();
    validatePositiveInteger(tryNumber);

    this.#racingGame = new RacingGame(carNames, tryNumber);
  }

  #execute() {
    OutputView.racingStartIntro();
    OutputView.printRaceResult(this.#racingGame.race());
    OutputView.printWinner(this.#racingGame.getWinners());
  }
}

export default GameController;
