import { MissionUtils } from "@woowacourse/mission-utils";
import { PrintRoundResult } from "./handler/PrintRoundResult.js";
import { DISTANCE, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER, WINNING_NUMBER } from "./constants/Constants.js";

export class Game {
  #printRoundResult;

  constructor() {
    this.#printRoundResult = new PrintRoundResult();
  }

  play(attemptCount, cars) {
    for (let i = 0; i < attemptCount; i++) {
      const roundResult = cars.map((car) => this.#game(car));
      this.#printRoundResult.print(roundResult);
    }
  }

  #game(car) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= WINNING_NUMBER) {
      car.move(DISTANCE);
    }
    return { name: car.getName(), length: car.getLength() }
  }
}
