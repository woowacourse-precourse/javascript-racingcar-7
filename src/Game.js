import { MissionUtils } from "@woowacourse/mission-utils";

const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 9;
const WINNING_NUMBER = 4;

export class Game {
  play(attemptCount, cars) {
    for (let i = 0; i < attemptCount; i++) {
      const roundResult = cars.map((car) => this.#game(car));
      console.log(roundResult);
    }
  }

  #game(car) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= WINNING_NUMBER) {
      car.move();
    }
    return { name: car.getName(), length: car.getLength() }
  }
}
