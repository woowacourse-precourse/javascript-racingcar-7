import { MissionUtils } from "@woowacourse/mission-utils";
import { PrintRoundResult } from "./handler/PrintRoundResult.js";
import {
  DISTANCE,
  MAX_RANDOM_NUMBER,
  MIN_ATTEMPT_COUNT,
  MIN_RANDOM_NUMBER,
  WINNING_NUMBER
} from "./constants/Constants.js";
import { ATTEMPT_COUNT_ERROR_MESSAGE } from "./constants/Messages.js";

export class Game {
  #printRoundResult;

  constructor() {
    this.#printRoundResult = new PrintRoundResult();
  }

  play(attemptCount, cars) {
    this.#checkAttemptCountRange(attemptCount);

    for (let i = 0; i < attemptCount; i++) {
      this.#playRound(cars);
    }
    return this.#getWinners(cars);
  }

  #checkAttemptCountRange(attemptCount) {
    if (attemptCount < MIN_ATTEMPT_COUNT) throw new Error(ATTEMPT_COUNT_ERROR_MESSAGE);
  }

  #playRound(cars) {
    const roundResult = cars.map((car) => this.#game(car));
    this.#printRoundResult.print(roundResult);
  }

  #game(car) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= WINNING_NUMBER) {
      car.move(DISTANCE);
    }
    return { name: car.getName(), length: car.getLength() }
  }

  #getWinners(cars) {
    const maxLength = cars.reduce((max, car) => Math.max(max, car.getLength()), 0);
    const winnerCars = cars.filter((car) => car.getLength() === maxLength);
    return winnerCars.map((car) => car.getName());
  }
}
