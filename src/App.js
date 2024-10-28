import Racingcar from './Racingcar.js';
import ioMethod from './inputoutputMethod.js';
import MAGICNUMBER from './magicnumber.js';
import ERRORMESAGE from './errorMessage.js';
import validation from './validation.js';
import utils from './utils.js';

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
    this.#tryNum = utils.tryNumvalidation(this.#tryNum);
    this.#board = utils.createBoard(inputArr);
    ioMethod.printProgressResult();
  }

  #carRacing() {
    for (let idx = 0; idx < this.#tryNum; idx += 1) {
      this.#board = this.#racingcar.play(this.#board);
      ioMethod.printGameProgress(this.#board);
    }
  }
}

export default App;
