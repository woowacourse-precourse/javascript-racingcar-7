import Racingcar from './components/Racingcar.js';
import {
  inputCarName,
  inputTryNum,
  printGameProgress,
  printNewLine,
  printProgressResult,
} from './utils/index.js';
import { MAGICNUMBER } from './constants/index.js';
import { printFirstPlayer } from './utils/inputoutputMethod.js';

class App {
  async run() {
    const inputs = await inputCarName();
    const inputArr = inputs.split(MAGICNUMBER.SEPARATOR);
    const tryNum = Number(await inputTryNum());
    const racingcar = new Racingcar(inputArr, tryNum);
    printProgressResult();
    let board;
    for (let idx = 0; idx < tryNum; idx += 1) {
      board = racingcar.play();
      printGameProgress(board);
      printNewLine();
    }
    const firstPlayer = racingcar.rank();
    printFirstPlayer(firstPlayer);
  }
}

export default App;
