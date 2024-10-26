import { OUTPUT } from '../constant.js';
import Validator from '../Validator.js';

export default class RacingCarController {
  #racingCarService;
  #inputView;
  #outputView;

  constructor(racingCarService, inputView, outputView) {
    this.#racingCarService = racingCarService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async run() {
    await this.inputCarNames();
    const tryNumber = await this.inputTryNumber();

    this.printAdvancedResult(tryNumber);

    this.printWinners();
  }

  async inputCarNames() {
    const carNamesString = await this.#inputView.carNames();
    Validator.userInput(carNamesString);
    this.#racingCarService.saveCars(carNamesString);
  }

  async inputTryNumber() {
    const tryNumber = Number(await this.#inputView.tryNumber());
    Validator.tryNumber(tryNumber);
    return tryNumber;
  }

  printAdvancedResult(tryNumber) {
    this.#outputView.emptyLine();
    this.#outputView.string(OUTPUT.EXCUTION_RESULT);
    for (let i = 0; i < tryNumber; i++) {
      const advancedResult = this.#racingCarService.processCarMovement();
      this.#outputView.advancedResult(advancedResult);
      this.#outputView.emptyLine();
    }
  }

  printWinners() {
    const winners = this.#racingCarService.getWinners();
    this.#outputView.winners(winners);
  }
}
