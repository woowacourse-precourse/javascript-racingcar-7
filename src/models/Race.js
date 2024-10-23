import { Console } from '@woowacourse/mission-utils';

class Race {
  #cars;
  #roundCount;

  constructor(cars, roundCount) {
    this.#cars = cars;
    this.#roundCount = roundCount;
  }

  start() {
    Console.print('\n실행 결과');

    for (let round = 0; round < this.#roundCount; round++) {
      this.#cars.forEach((car) => {
        car.tryMove();
        car.printStatus();
      });

      // 스텝 간 간격을 위한 빈 줄 출력
      Console.print('');
    }
  }
}

export default Race;
