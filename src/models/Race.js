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

  #findWinners() {
    const maxDistance = this.#cars.reduce((maxDistance, car) => {
      return Math.max(maxDistance, car.getDistance());
    }, 0);

    return this.#cars.filter((car) => car.getDistance() === maxDistance);
  }

  printWinners() {
    const winnerCars = this.#findWinners(this.#cars);

    const winnerNames = winnerCars.map((winner) => winner.getName()).join(',');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default Race;
