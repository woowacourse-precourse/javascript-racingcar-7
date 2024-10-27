import { ERROR_MESSAGE } from '../constants/constant';

class AttemptCount {
  #attemptCount;
  constructor(inputCount) {
    const attemptCount = this.#inputToNumber(inputCount);

    this.#isNumber(attemptCount);
    this.#setAttemptCount(attemptCount);
  }

  #inputToNumber(inputCount) {
    return Number(inputCount);
  }

  #isNumber(attemptCount) {
    if (Object.is(attemptCount, NaN)) {
      throw new Error(ERROR_MESSAGE.numberError);
    }
  }

  #setAttemptCount(attemptCount) {
    this.#attemptCount = attemptCount;
  }

}

export default AttemptCount;
