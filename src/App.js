import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "./constants/message.js";
import Racingcar from "./model/racingcar.js";
import {
  validateInputBlank,
  validateCarNameLength,
  validateRacingCarSeparator,
  validateCarNameOverlap,
  validateRacingCountNumber,
  validateRacingCountType,
} from "./Validation.js";
import LETTER from "./constants/constant.js";

class App {
  getRacingCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
    validateInputBlank(input);
    validateRacingCarSeparator(input);
    const carVariety = input.split(",").map((carName) => {
      validateCarNameLength(carName);
      return carName;
    });

    validateCarNameOverlap(carVariety);

    return carVariety.map((carName) => new Racingcar(carName));
  };

  getRacingAttmeptCount = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.attemptNumber);
    validateInputBlank(input);
    validateRacingCountType(input);
    validateRacingCountNumber(input);

    return input;
  };

  totalWinner = (cars) => {
    const maxForward = Math.max(...cars.map((car) => car.distance));
    return cars.filter((car) => car.distance === maxForward);
  };

  printRacingResult = (cars, count) => {
    console.log();
    Console.print(OUTPUT_MESSAGE.racingResult);

    Array.from({ length: count }).forEach(() => {
      this.printMoveForwardResult(cars);
    });
  };

  printMoveForwardResult = (cars) => {
    cars.forEach((car) => {
      car.stopAndGo();
      Console.print(`${car.name} : ${LETTER.runResult.repeat(car.distance)}`);
    });
    console.log(); // 횟수별 줄바꿈 용도
  };

  printWinner = (winner) => {
    Console.print(
      `${OUTPUT_MESSAGE.winner}${winner
        .map((winner) => winner.name)
        .join(", ")}`
    );
  };

  async run() {
    try {
      const cars = await this.getRacingCarName();
      const count = await this.getRacingAttmeptCount();

      this.printRacingResult(cars, count);

      const winner = this.totalWinner(cars);
      this.printWinner(winner);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
