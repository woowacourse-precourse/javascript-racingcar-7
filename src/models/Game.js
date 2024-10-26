import { MissionUtils } from '@woowacourse/mission-utils';
import { printRaceProgress } from '../views/output.js';
import generateRandomNumber from '../utils/random.js';
import { MOVE_THRESHOLD } from '../constants/numbers.js';

export default class Game {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  playAllRounds() {
    MissionUtils.Console.print(`\n실행 결과`);

    for (let i = 1; i <= this.rounds; i += 1) {
      this.playSingleRound();
      printRaceProgress(this.cars);
    }
  }

  playSingleRound() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= MOVE_THRESHOLD) {
        car.move();
      }
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars.filter((car) => car.getPosition() === maxPosition);
  }
}
