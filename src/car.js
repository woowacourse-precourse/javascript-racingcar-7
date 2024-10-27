import { Random } from '@woowacourse/mission-utils';
import RacingCar from './racingCar.js';

class Car {
  #game;
  constructor(name) {
    this.name = name;
    this.#game = new RacingCar();
    this.#game.join(this);
  }

  roll() {
    const dice = Random.pickNumberInRange(0, 9);
    if (dice >= 4) this.#move();
  }

  #move() {
    this.#game.board[this.name] += '-';
  }
}

export default Car;
