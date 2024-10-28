import TargetRoundValidation from './validation/TargetRoundValidator.js';

export default class Round {
  #targetRound;
  #currentRound;

  constructor (targetRound) {
    TargetRoundValidation.validateTargetRound(targetRound);
    this.#targetRound = targetRound;
    this.#currentRound = 0;
  }

  getTargetRound () {
    return this.#targetRound;
  }

  nextRound () {
    this.#currentRound += 1;
  }

  isFinished () {
    return this.#currentRound >= this.#targetRound;
  }
}
