import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(cars, tryCnt) {
    this.cars = cars;
    this.tryCnt = tryCnt;
  }

  play() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.tryCnt; i += 1) {
      this.cars.forEach(car => {
        car.moveForward();
        Console.print(
          `${car.getName()} : ${'-'.repeat(car.getMoveForwardCnt())}`,
        );
      });
      Console.print('\n');
    }
  }

  printResult() {
    const maxMoveForward = this.cars.reduce((acc, curr) => {
      if (acc < curr.getMoveForwardCnt()) return curr.getMoveForwardCnt();
      return acc;
    }, 0);

    Console.print(
      `최종 우승자 : ${this.cars
        .filter(car => car.getMoveForwardCnt() === maxMoveForward)
        .map(car => car.getName())
        .join(',')}`,
    );
  }
}

export default RacingGame;
