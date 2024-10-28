import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Race {
  constructor(carNames, attemptCount) {
    this.cars = carNames.split(",").map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  start() {
    for (let i = 0; i< this.attemptCount; i++) {
      this.cars.array.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0,9);
        car.move(randomNumber);
      });
      this.printStatus();
    }
    this.printWinners();
  }

  printStatus() {
    this.cars.forEach((car) => {
      console.log(`${car.name} : ${'-'.repeat(car.getPosition())}`);
    });
    console.log("");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) =>  car.getPosition()));
    const winners = this.car.filter((car) => car.getPosition() === maxPosition).map((car) => car.name);
    console.log(`최종 우승자 : ${winners.join(", ")}`);
  }
}


export default Race;