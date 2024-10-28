import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from './constants.js';

/**
 *
 */
class Accelerator {
  #minRandomNumber;
  #maxRandomNumber;
  #threshold;

  /**
   *
   */
  constructor() {
    const { MIN, MAX, THRESHOLD } = RANDOM_NUMBER;
    this.#minRandomNumber = MIN;
    this.#maxRandomNumber = MAX;
    this.#threshold = THRESHOLD;
  }

  /**
   *
   */
  isAccelerate() {
    return (
      Random.number(this.#minRandomNumber, this.#maxRandomNumber) >=
      this.#threshold
    );
  }
}

export default Accelerator;
