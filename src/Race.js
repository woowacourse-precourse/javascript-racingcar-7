import { Console } from '@woowacourse/mission-utils';

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  start() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => {
        car.move();
        Console.print(car.getStatus());
      });
      Console.print('');
    }
  }

  getWinners() {
    const maxPosition = Math.max(
      ...this.cars.map((car) => car.getPositionLength()),
    );
    return this.cars
      .filter((car) => car.getPositionLength() === maxPosition)
      .map((car) => car.name);
  }
}

export default Race;
