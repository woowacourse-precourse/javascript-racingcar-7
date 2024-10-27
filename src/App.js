import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import CarRacer from './CarRacer.js';
import ResultPrinter from './ResultPrinter.js';
import { IO_MESSAGES } from './constants.js';

class App {
  async run() {
    const carNamesStr = await this.readCarNames();
    const tryCntStr = await this.readTryCnt();

    const inputParser = new InputParser(carNamesStr, tryCntStr);
    const { carNamesArr, tryCnt } = inputParser.parse();

    const carRacer = new CarRacer(carNamesArr, tryCnt);
    const result = carRacer.race();

    const resultPrinter = new ResultPrinter(result);
    resultPrinter.print();
  }

  readCarNames() {
    return Console.readLineAsync(IO_MESSAGES.INPUT_CAR_NAMES);
  }

  readTryCnt() {
    return Console.readLineAsync(IO_MESSAGES.INPUT_TRY_CNT);
  }
}

export default App;
