import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../Car/car.js';
import { gameWinnerComment } from '../Output/outPut.js';

class Race {
  constructor(car, round) {
    this.car = car.map((name) => new Car(name));
    this.round = round;
  }
  async startRace() {
    for (let i = 0; i < this.round; i++) {
      this.runRound();
      this.viewPosition();
      MissionUtils.Console.print('\n');
    }
    this.gameWinner();
  }

  runRound() {
    this.car.forEach((car) => car.move());
  }

  viewPosition() {
    this.car.forEach((car) => MissionUtils.Console.print(car.viewPosition()));
  }

  gameWinner() {
    const maxPosition = Math.max(...this.car.map((car) => car.position));
    const winners = this.car
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    gameWinnerComment(winners.join(', '));
  }
}

export default Race;
