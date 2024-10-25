import { OUTPUT } from '../../constant.js';
import Validator from '../Validator.js';

export default class RacingCarController {
  #racingCarService;
  #inputView;
  #ouputView;

  constructor(racingCarService, inputView, outputView) {
    this.#racingCarService = racingCarService;
    this.#inputView = inputView;
    this.#ouputView = outputView;
  }

  async run() {
    const carNamesString = await this.#inputView.carNames();
    Validator.userInput(carNamesString);
    this.#racingCarService.saveCars(carNamesString);

    const tryNumber = Number(await this.#inputView.tryNumber());
    Validator.tryNumber(tryNumber);

    this.#ouputView.emptyLine();
    this.#ouputView.string(OUTPUT.EXCUTION_RESULT);
    for (let i = 0; i < tryNumber; i++) {
      const advancedResult = this.#racingCarService.processCarMovement();
      this.#ouputView.advancedResult(advancedResult);
      this.#ouputView.emptyLine();
    }

    const winners = this.#racingCarService.getWinners();
    this.#ouputView.winners(winners);
  }
}
