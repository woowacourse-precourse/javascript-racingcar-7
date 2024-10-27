import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser';
import CarRacer from './CarRacer';
import ResultPrinter from './ResultPrinter';

class App {
  async run() {
    const carNamesStr = await this.readCarNames();
    const tryCntStr = await this.readTryCnt();

    const inputParser = new InputParser(carNamesStr, tryCntStr);
    const { carNamesArr, tryCnt } = inputParser.parse();

    const carRacer = new CarRacer(carNamesArr, tryCnt);
    const moveCntPerCar = carRacer.race();

    const resultPrinter = new ResultPrinter(moveCntPerCar);
    resultPrinter.print();
  }

  readCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  readTryCnt() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
