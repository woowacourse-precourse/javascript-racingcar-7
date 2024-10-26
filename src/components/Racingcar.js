import { validation } from '../utils/index.js';
import { ERRORMESAGE } from '../constants/index.js';

export default class Racingcar {
  /**
   *
   * @param {Array} inputArr
   */
  constructor(inputArr, tryNum) {
    this.#validate(inputArr, tryNum);
  }

  #validate(inputArr, tryNum) {
    if (!validation.isLengthBelowFive(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_LENGTH}`);
    if (validation.hasSpace(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_FORM_SPACE}`);
    if (validation.isEmpty(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_FORM_EMPTY}`);
    if (!validation.isNotDuplicate(inputArr))
      throw new Error(`${ERRORMESAGE.NOT_DUPLICATE_NAME}`);
    if (!validation.isPositiveInteger(tryNum))
      throw new Error(`${ERRORMESAGE.NOT_POSITIVE_INTEGER}`);
  }
}
