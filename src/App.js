import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, IO_MESSAGE } from './common/message.js';
import Car from './car/Car.js';
import { isNumber } from './common/stringUtil.js';
import { COMMON } from './common/constant.js';

class App {
  async run() {
    const CARS = await this.getCars();
    const TRY_COUNT = await this.getTryCount();
    Console.print(IO_MESSAGE.OUTPUT_ANNOUNCE_MESSAGE);
    for (let i = 0; i < TRY_COUNT; i++) {
      CARS.forEach(car => car.moveOrStop());
      this.peekResult(CARS);
    }
  }

  async getCars() {
    const CAR_NAMES = await Console.readLineAsync(IO_MESSAGE.INPUT_CAR_NAME);
    if (!CAR_NAMES) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    return CAR_NAMES.split(',').map(name => new Car(name));
  }

  async getTryCount() {
    const TRY_COUNT_STRING = await Console.readLineAsync(IO_MESSAGE.INPUT_TRY_COUNT);
    if (!TRY_COUNT_STRING) throw new Error(ERROR_MESSAGE.EMPTY_STRING);
    if (!isNumber(TRY_COUNT_STRING)) throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
    const TRY_COUNT = Number(TRY_COUNT_STRING);
    if (TRY_COUNT <= 0) throw new Error(ERROR_MESSAGE.IS_NOT_POSITIVE_NUMBER);

    // 너무 큰 값을 방지하고 중간 결과를 한 줄로 출력하기 위해 임의로 제한하는 값입니다.
    if (TRY_COUNT > COMMON.TRY_COUNT_MAX) throw new Error(ERROR_MESSAGE.TOO_BIG_TRY_COUNT);
    return TRY_COUNT;
  }

  peekResult(cars) {
    cars.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.count)}`);
    });
    Console.print('');
  }
}

export default App;
