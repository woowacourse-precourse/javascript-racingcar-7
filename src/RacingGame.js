import { Random, Console } from '@woowacourse/mission-utils';

class RacingGame {
  static FORWARD_INDICATOR = '-';
  static FORWARD_CRITERION = 4;

  constructor(cars, attemptCount) {
    this.cars = cars;
    this.attemptCount = attemptCount;
  }

  play() {
    let currentStep = 1;
    while (currentStep <= this.attemptCount) {
      this.attemptRacingStep();
      this.printStatusByStep();
      currentStep++;
    }
    this.printWinners();
  }

  attemptRacingStep() {
    this.cars.forEach((car) => {
      this.tryMoveForward(car);
    });
  }

  tryMoveForward(car) {
    const MIN_RANDOM_NUMBER = 0;
    const MAX_RANDOM_NUMBER = 9;
    if (
      this.getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER) >=
      RacingGame.FORWARD_CRITERION
    ) {
      car.forward();
    }
  }

  getRandomNumber(min, max) {
    return Random.pickNumberInRange(min, max);
  }

  printStatusByStep() {
    this.cars.forEach((car) => {
      Console.print(
        `${car.name} : ${RacingGame.FORWARD_INDICATOR.repeat(car.forwardCount)}`
      );
    });
    Console.print(''); // 각 단계를 구분할 빈 줄 추가
  }

  printWinners() {
    const maxForwardCount = Math.max(
      ...this.cars.map((car) => car.forwardCount)
    );
    const winners = this.cars
      .filter((car) => car.forwardCount === maxForwardCount)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default RacingGame;
