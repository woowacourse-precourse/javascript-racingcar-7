import Racingcar from './Racingcar.js';
import ioMethod from './inputoutputMethod.js';
import MAGICNUMBER from './magicnumber.js';
import ERRORMESAGE from './errorMessage.js';
import validation from './validation.js';

class App {
  #racingcar;
  #tryNum;
  #board;

  async run() {
    await this.#gameSetting();
    this.#carRacing();
    ioMethod.printFirstPlayer(this.#racingcar.rank(this.#board));
  }

  async #gameSetting() {
    const inputs = await ioMethod.inputCarName();
    const inputArr = inputs.split(MAGICNUMBER.SEPARATOR);
    this.#racingcar = new Racingcar(inputArr);
    this.#tryNum = await ioMethod.inputTryNum();
    this.#tryNumvalidation(this.#tryNum);
    this.#board = this.#createBoard(inputArr);
    ioMethod.printProgressResult();
  }

  #tryNumvalidation(tryNum) {
    if (!validation.isPositiveInteger(Number(tryNum)))
      throw new Error(`${ERRORMESAGE.NOT_POSITIVE_INTEGER}`);

    const tryNumArr = String(tryNum).split('');
    if (validation.hasSpace(tryNumArr))
      throw new Error(`${ERRORMESAGE.WRONG_NUMBER_FORM_SPACE}`);

    Number(this.#tryNum);
  }

  #createBoard(inputArr) {
    const board = {};
    inputArr.map((car) => {
      board[car] = '';
    });
    return board;
  }

  #carRacing() {
    for (let idx = 0; idx < this.#tryNum; idx += 1) {
      this.#board = this.#racingcar.play(this.#board);
      ioMethod.printGameProgress(this.#board);
    }
  }
}

export default App;
