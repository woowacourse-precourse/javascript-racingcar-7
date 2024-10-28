import Racingcar from './components/Racingcar.js';
import { ioMethod } from './utils/index.js';
import { MAGICNUMBER } from './constants/index.js';

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
    this.#tryNum = Number(await ioMethod.inputTryNum());
    this.#racingcar = new Racingcar(inputArr, this.#tryNum);
    this.#board = this.#createBoard(inputArr);
    ioMethod.printProgressResult();
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
