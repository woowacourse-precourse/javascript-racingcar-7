import OutputView from '../view/OutputView.js';
import RacingGame from '../model/RacingGame.js';
import { readAndValidateCarNames, readAndValidateTryNumber } from '../utils/reader.js';

class GameController {
  #racingGame;

  async play() {
    await this.#createRacingGameFromUserInput();
    this.#execute();
  }

  async #createRacingGameFromUserInput() {
    const carNames = await readAndValidateCarNames();
    const tryNumber = await readAndValidateTryNumber();

    this.#racingGame = new RacingGame(carNames, tryNumber);
  }

  #execute() {
    this.#displayRaceResult();
    this.#displayWinner();
  }

  #displayRaceResult() {
    OutputView.printRaceResult(this.#racingGame.race());
  }

  #displayWinner() {
    OutputView.printWinner(this.#racingGame.getWinners());
  }
}

export default GameController;
