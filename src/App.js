import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, IO_MESSAGE } from './common/message';
import Car from './car/Car';
import { isNumber } from './common/stringUtil';
import COMMON from './common/constant';

class App {
  constructor() {
    this.CARS = null;
    this.TRY_COUNT = 0;
  }

  async run() {
    await this.setCars();
    await this.setTryCount();
    Console.print(IO_MESSAGE.OUTPUT_ANNOUNCE_MESSAGE);
    this.moveCars(this.CARS);
    this.printFinalResult();
  }

  async setCars() {
    const CAR_NAMES = await Console.readLineAsync(IO_MESSAGE.INPUT_CAR_NAME);
    if (!CAR_NAMES) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    this.CARS = CAR_NAMES.split(',').map((name) => new Car(name));
  }

  async setTryCount() {
    const TRY_COUNT_STRING = await Console.readLineAsync(IO_MESSAGE.INPUT_TRY_COUNT);
    if (!TRY_COUNT_STRING) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    if (!isNumber(TRY_COUNT_STRING)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    const TRY_COUNT = Number(TRY_COUNT_STRING);
    if (TRY_COUNT <= 0 || TRY_COUNT % 1 !== 0) throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);

    // 너무 큰 값을 방지하고 중간 결과를 한 줄로 출력하기 위해 요구사항 이외에 임의로 제한하는 값입니다.
    if (TRY_COUNT > COMMON.TRY_COUNT_MAX) throw new Error(ERROR_MESSAGE.TOO_BIG_TRY_COUNT);
    this.TRY_COUNT = TRY_COUNT;
  }

  moveCars() {
    for (let i = 0; i < this.TRY_COUNT; i += 1) {
      this.CARS.forEach((car) => {
        car.tryMove();
        car.peekResult();
      });
      Console.print('');
    }
  }

  printFinalResult() {
    const CARS = [...this.CARS];
    CARS.sort((a, b) => b.count - a.count); // count 별 내림차순
    const MAX = CARS[0].count;
    const RESULT = CARS.filter((car) => car.count === MAX).map((car) => car.name);
    Console.print(`최종 우승자 : ${RESULT.join(', ')}`);
  }
}

export default App;
