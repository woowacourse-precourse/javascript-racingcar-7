import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser';
import CarRacer from './CarRacer';
import ResultPrinter from './ResultPrinter';

class App {
  async run() {
    const carNamesStr = await this.readCarNames();
    const attemptCntStr = await this.readAttemptCnt();

    const inputParser = new InputParser(carNamesStr, attemptCntStr);
    const { carNamesArr, attemptCnt } = inputParser.parse();

    const carRacer = new CarRacer(carNamesArr, attemptCnt);
    const moveCntPerCar = carRacer.race();

    const resultPrinter = new ResultPrinter(moveCntPerCar);
    resultPrinter.print();
  }

  readCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  readAttemptCnt() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
