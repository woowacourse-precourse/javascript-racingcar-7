import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RacingGame from '../model/RacingGame.js';
import { carNameValidate, numberValidate } from '../utils/validate.js';

class GameController {
  #racingGame;

  async play() {
    await this.#createRacingGameFromUserInput();
    this.#execute();
  }

  async #createRacingGameFromUserInput() {
    const carNames = await InputView.readCarNames();
    carNameValidate(carNames);

    const tryNumber = await InputView.readTryNumber();
    numberValidate(tryNumber);

    this.#racingGame = new RacingGame(carNames, tryNumber);
  }

  #execute() {
    OutputView.racingStartIntro();
    OutputView.printRaceResult(this.#racingGame.race());
    OutputView.printWinner(this.#racingGame.getWinners());
  }
}

export default GameController;
