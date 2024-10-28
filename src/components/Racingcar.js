import { validation, pickRandomNumber } from '../utils/index.js';
import { ERRORMESAGE, MAGICNUMBER } from '../constants/index.js';

export default class Racingcar {
  #inputArr;
  /**
   *
   * @param {Array} inputArr
   */
  constructor(inputArr, tryNum) {
    this.#validate(inputArr, tryNum);
    this.#inputArr = inputArr;
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

  play(board) {
    for (const car of this.#inputArr) {
      if (pickRandomNumber() >= MAGICNUMBER.GOCONDITIONNUM) board[car] += '-';
    }
    return board;
  }

  rank(board) {
    let firstPlayer = [];
    let max = 0;
    for (const [key, value] of Object.entries(board)) {
      if (max < value.length) {
        firstPlayer.splice(0);
        firstPlayer.push(key);
        max = value.length;
        continue;
      }
      if (max === value.length) {
        firstPlayer.push(key);
      }
    }
    return firstPlayer;
  }
}
