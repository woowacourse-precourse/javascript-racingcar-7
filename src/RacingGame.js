import { Random, Console } from '@woowacourse/mission-utils';

class RacingGame {
  static FORWARD_INDICATOR = '-';

  constructor(cars, attemptCount) {
    this.cars = cars;
    this.attemptCount = attemptCount;
  }

  play() {
    let currentStep = 1;
    while (currentStep <= this.attemptCount) {
      this.cars.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.forward();
        }
      });
      this.printResultByStep(this.cars);
      currentStep++;
    }
    this.printWinners(this.cars);
  }

  printResultByStep(cars) {
    cars.forEach((car) => {
      Console.print(
        `${car.name} : ${RacingGame.FORWARD_INDICATOR.repeat(car.forwardCount)}`
      );
    });
    Console.print('');
  }

  printWinners(cars) {
    const maxForwardCount = Math.max(...cars.map((car) => car.forwardCount));
    const winners = cars
      .filter((car) => car.forwardCount === maxForwardCount)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default RacingGame;
