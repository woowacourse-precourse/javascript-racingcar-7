import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';

class RaceGameService {
  #status;
  #cars;
  #maxRound;
  #currentRound;
  #onEndRound;
  #onBeforeEnd;

  constructor() {
    this.#status = "created";
    this.#currentRound = 0;
  }

  start() {
    this.#onBeforeEnd();
    while (this.#currentRound < this.#maxRound) {
      this.#currentRound++;
      this.playRound();
    }
    this.#status = "end";
  }

  ready(carNames, maxRound, onEndRound, onBeforeEnd) {
    this.#status = "ready";
    const cars = carNames.map((name) => new Car(name));
    this.#cars = cars;
    this.#maxRound = maxRound;
    this.#onBeforeEnd = onBeforeEnd;
    this.#onEndRound = onEndRound;
  }

  playRound() {
    this.#status = "playing";
    for (const car of this.#cars) {
      if (this.#canMove()) {
        car.move();
      }
    }
    this.#onEndRound(this.status);
  }

  get status() {
    return {
      status: this.#status,
      cars: this.#cars.map((participants) => participants.status),
    };
  }

  getResult() {
    const { cars } = this.status;
    const winnersPosition = Math.max(...cars.map((car) => car.move));
    const winners = cars
      .filter((car) => car.move === winnersPosition)
      .map((car) => car.name);
    return {
      winners,
      status: this.#status,
    };
  }

  #canMove() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }
}


export default RaceGameService;
