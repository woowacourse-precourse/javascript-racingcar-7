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
    this.#runRounds();
  }

  #runRounds() {
    for (let round = 0; round < this.#roundCount; round += 1) {
      this.#cars.forEach((car) => {
        car.tryMove();
        car.printStatus();
      });

      // 라운드 간 간격을 위한 빈 줄 출력
      Console.print('');
    }
  }
}

export default Race;
