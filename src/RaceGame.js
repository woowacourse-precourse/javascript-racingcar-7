import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default class RaceGame {
  constructor(carNames, raceCount) {
    this.carNames = carNames;
    this.raceCount = raceCount;
    this.cars = [];
    this.startRace();
  }

  startRace() {
    this.initialize();
    for (let i = 0; i < this.raceCount; i += 1) {
      this.runRace();
      this.printRaceStatus();
    }
    this.printResult();
  }

  initialize() {
    this.carNames.split(',').forEach((carName) => {
      this.cars.push(new Car(carName));
    });
    Console.print('\n실행 결과');
  }

  runRace() {
    this.cars.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        car.moveCar();
      }
    });
  }

  printRaceStatus() {
    this.cars.forEach((car) => {
      car.printCarStatus();
    });
    Console.print('');
  }

  printResult() {
    const raceWinners = this.determineWinner().join(', ');
    Console.print(`최종 우승자 : ${raceWinners}`);
  }

  determineWinner() {
    let winners = [];
    const race = new Map();
    this.cars.forEach((car) => {
      race.set(car.getCarName(), car.getMoveCount());
    });
    const topProgress = Math.max(...race.values());
    for (let car of race) {
      if (car[1] === topProgress) {
        winners.push(car[0]);
      }
    }
    return winners;
  }
}
