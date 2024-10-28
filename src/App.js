import Racingcar from './components/Racingcar.js';
import {
  inputCarName,
  inputTryNum,
  printGameProgress,
  printProgressResult,
} from './utils/index.js';
import { MAGICNUMBER } from './constants/index.js';
import { printFirstPlayer } from './utils/inputoutputMethod.js';

class App {
  #racingcar;
  #tryNum;
  #board;

  async run() {
    await this.#gameSetting();
    this.#carRacing();
    printFirstPlayer(this.#racingcar.rank(this.#board));
  }

  async #gameSetting() {
    const inputs = await inputCarName();
    const inputArr = inputs.split(MAGICNUMBER.SEPARATOR);
    this.#tryNum = Number(await inputTryNum());
    this.#racingcar = new Racingcar(inputArr, this.#tryNum);
    this.#board = this.#createBoard(inputArr);
    printProgressResult();
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
      printGameProgress(this.#board);
    }
  }
}

export default App;
