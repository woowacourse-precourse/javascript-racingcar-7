import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 자동차 이름 입력
    const CARS_INPUT = await this.getCarsInput();

    const CARS = this.splitCars(CARS_INPUT);
    const CARS_COUNT = CARS.length;
    
  }

  async getCarsInput() {
    const CARS_INPUT = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    return CARS_INPUT;
  }

  // 차 이름 검사하기
  validateCarName(NAME, CARS) {
    // 영어 문자만 가능
    const CAR_NAME_PATTERN = /^[a-zA-Z]+$/;
    if (!CAR_NAME_PATTERN.test(NAME)) {
      throw new Error('[ERROR] 자동차 이름은 영문자만 가능합니다. ');
    }

    // 5자 이하만 가능
    if (NAME.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다. ');
    }

    // 중복 불가능
    if (CARS.includes(NAME)) {
      throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다. ');
    }

    return true;
  }

  splitCars(CARS_INPUT) {
    const CARS_SPLIT = CARS_INPUT.split(',');

    const CARS = [];

    // 각 이름이 valid한지 검사
    CARS_SPLIT.forEach((car) => {
      if (this.validateCarName(car, CARS)) {
        CARS.push(car);
      }
    });

    return CARS;
  }
}

export default App;
