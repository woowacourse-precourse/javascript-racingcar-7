import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(cars, moveAttempts) {
    this.cars = cars;
    this.moveAttempts = moveAttempts;
  }

  play() {
    Console.print('\n실행 결과');

    for (let i = 0; i < this.moveAttempts; i += 1) {
      this.cars.forEach(car => {
        car.moveForward();
      });
      this.printCarMovement();

      Console.print('\n');
    }
  }

  printCarMovement() {
    this.cars.forEach(car => {
      Console.print(
        `${car.getCarName()} : ${'-'.repeat(car.getMoveForwardCnt())}`,
      );
    });
  }

  printResult() {
    const maxMoveForward = Math.max(
      ...this.cars.map(car => car.getMoveForwardCnt()),
    );

    Console.print(
      `최종 우승자 : ${this.cars
        .filter(car => car.getMoveForwardCnt() === maxMoveForward)
        .map(car => car.getCarName())
        .join(',')}`,
    );
  }
}

export default RacingGame;
