import InputViews from "../views/InputViews.js";
import OutputViews from "../views/OutputViews.js";
import { Random } from "@woowacourse/mission-utils";
import ERRORS from "../constants/Errors.js";
import Race from "../models/Race.js";
import Car from "../models/Car.js";
import CONDITIONS from "../constants/Conditions.js";
import Validation from "../validations/Validations.js";

class Game {
  #game;

  async start() {
    // 자동차 이름 입력
    const cars = await InputViews.carNameInput();
    Validation.isValidCarName(cars);

    // 시도할 횟수 입력
    const totalRound = await InputViews.tryCountInput();
    Validation.isValidTotalRound(totalRound);

    // 게임 시작
    const carNameArr = cars.split(",").map((car) => new Car(car));
    this.#game = new Race(+totalRound, carNameArr);

    // 게임 진행
    OutputViews.printExecutionResult();
    for (let i = 0; i < this.#game.getTotalRound(); i++) {
      Game.updateNumberOfAdvance(carNameArr);
      OutputViews.printEachRoundResult(carNameArr);
    }

    // 최종 우승자 출력
    const winners = Game.calculateWinners(carNameArr);
    OutputViews.printFinalWinners(winners);
  }

  static selectRandomNumber() {
    try {
      return Random.pickNumberInRange(
        CONDITIONS.RANDOM_MIN_NUM,
        CONDITIONS.RANDOM_MAX_NUM
      );
    } catch {
      throw new Error(ERRORS.GENERAL);
    }
  }

  static canCarAdvance(randomNumber) {
    return randomNumber >= CONDITIONS.ADVANCE_NUM;
  }

  static updateNumberOfAdvance(racingCars) {
    racingCars.forEach((racingCar) => {
      const randomNumber = Game.selectRandomNumber();
      racingCar.advance(Game.canCarAdvance(randomNumber));
    });
  }

  static calculateWinners(racingCars) {
    const maxNumberOfAdvance = Math.max(
      ...racingCars.map((racingCar) => racingCar.getNumberOfAdvance())
    );
    return racingCars.filter(
      (racingCar) => racingCar.getNumberOfAdvance() === maxNumberOfAdvance
    );
  }
}

export default Game;
