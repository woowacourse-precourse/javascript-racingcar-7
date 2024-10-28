import view from './view.js';
import validator from './utils/validator.js';
import { STRINGS } from './constants/values.js';
import Game from './Game.js';

class Controller {
  #game;

  async play() {
    await this.#readCars();
    await this.#readTrialCount();
  }

  async #readCars() {
    const carNameAnswer = await view.readCars();
    const carNames = carNameAnswer.split(STRINGS.inputNameDelimiter);
    validator.validateCarNames(carNames);
    this.#game = new Game(carNames);
  }

  async #readTrialCount() {
    const trialCount = Number(await view.readTrialCount());
    validator.validateTrialCount(trialCount);
    this.#execute(trialCount);
  }

  #executeOnce() {
    const totalCarProgress = this.#game.moveAndGetResultOfAllCars();
    totalCarProgress.forEach(({ name, progress }) => {
      view.printProgress(name, progress);
    });
    view.printLineBreak();
  }

  #execute(trialCount) {
    view.printExecutionResultMessage();
    for (let i = 0; i < trialCount; i += 1) {
      this.#executeOnce();
    }
    this.#printWinner();
  }

  #printWinner() {
    const winners = this.#game.getWinner();
    view.printWinner(winners);
  }
}

export default Controller;
