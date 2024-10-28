import validation from './validation.js';
import pickRandomNumber from './pickRandomNumber.js';
import ERRORMESAGE from './errorMessage.js';
import MAGICNUMBER from './magicnumber.js';

export default class Racingcar {
  #inputArr;
  /**
   *
   * @param {Array} inputArr
   */
  constructor(inputArr) {
    this.#validate(inputArr);
    this.#inputArr = inputArr;
  }

  #validate(inputArr) {
    if (!validation.isLengthBelowFive(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_LENGTH}`);
    if (validation.hasSpace(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_FORM_SPACE}`);
    if (validation.isEmpty(inputArr))
      throw new Error(`${ERRORMESAGE.WRONG_NAME_FORM_EMPTY}`);
    if (!validation.isNotDuplicate(inputArr))
      throw new Error(`${ERRORMESAGE.NOT_DUPLICATE_NAME}`);
  }

  play(board) {
    for (const car of this.#inputArr) {
      if (pickRandomNumber() >= MAGICNUMBER.GOCONDITIONNUM) board[car] += '-';
    }
    return board;
  }

  rank(board) {
    let firstPlayer = [];
    const maxProgress = Math.max(
      ...Object.values(board).map((hyphen) => hyphen.length),
    );
    for (const [key, value] of Object.entries(board)) {
      if (value.length === maxProgress) firstPlayer.push(key);
    }
    return firstPlayer;
  }
}
