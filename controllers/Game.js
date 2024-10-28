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
    const cars = await InputViews.carNameInput();
    Validation.isValidCarName(cars);

    const totalRound = await InputViews.tryCountInput();
    Validation.isValidTotalRound(totalRound);

    const carNameArr = cars.split(",").map((car) => new Car(car));
    this.#game = new Race(+totalRound, carNameArr);

    OutputViews.printExecutionResult();
    for (let i = 0; i < this.#game.getTotalRound(); i++) {
      Game.updateNumberOfAdvance(carNameArr);
      OutputViews.printEachRoundResult(carNameArr);
    }

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
      racingCar.Advance(Game.canCarAdvance(randomNumber));
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
