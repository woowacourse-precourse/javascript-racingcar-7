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

  async run() {
    await this.#gameSetting();
    this.#carRacing();
    printFirstPlayer(this.#racingcar.rank());
  }

  async #gameSetting() {
    const inputs = await inputCarName();
    const inputArr = inputs.split(MAGICNUMBER.SEPARATOR);
    this.#tryNum = Number(await inputTryNum());
    this.#racingcar = new Racingcar(inputArr, this.#tryNum);
    printProgressResult();
  }

  #carRacing() {
    let board;
    for (let idx = 0; idx < this.#tryNum; idx += 1) {
      board = this.#racingcar.play();
      printGameProgress(board);
    }
  }
}

export default App;
