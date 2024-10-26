import { validation, pickRandomNumber } from '../utils/index.js';
import { ERRORMESAGE, MAGICNUMBER } from '../constants/index.js';

export default class Racingcar {
  #inputArr;
  #tryNum;
  #board;
  /**
   *
   * @param {Array} inputArr
   */
  constructor(inputArr, tryNum) {
    this.#validate(inputArr, tryNum);
    [this.#inputArr, this.#tryNum] = [inputArr, tryNum];
    this.#board = this.#createBoard();
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

  play() {
    for (const car of this.#inputArr) {
      if (pickRandomNumber() >= MAGICNUMBER.GOCONDITIONNUM)
        this.#board[car] += '-';
    }
    return this.#board;
  }

  #createBoard() {
    const board = {};
    this.#inputArr.map((car) => {
      board[car] = '';
    });
    return board;
  }

  get() {
    return [this.#inputArr, this.#tryNum];
  }
}
