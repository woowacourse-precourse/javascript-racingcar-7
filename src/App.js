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
import { LETTER } from "./constants/constant.js";

class App {
  getRacingCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carName);
    validateInputBlank(input);
    const carVariety = input.split(LETTER.split).map((carName) => {
      //validateRacingCarSeparator(carName);
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

  calculateWinner = (cars) => {
    const maxForward = Math.max(...cars.map((car) => car.forward));
    return cars.filter((car) => car.forward === maxForward);
  };

  printRacingResult = (cars, count) => {
    Console.print(OUTPUT_MESSAGE.racingResult);

    Array.from({ length: count }).forEach(() => {
      this.printMoveForwardResult(cars);
    });
  };

  printMoveForwardResult = (cars) => {
    cars.forEach((car) => {
      car.stopAndGo();
      Console.print(`${car.name} : ${LETTER.runResult.repeat(car.forward)}`);
    });
    console.log(); // 횟수별 줄바꿈 용도
  };

  printWinner = (winner) => {
    Console.print(
      `${OUTPUT_MESSAGE.winner} : ${winner
        .map((winner) => winner.name)
        .join(LETTER.split)}`
    );
  };

  async run() {
    try {
      const cars = await this.getRacingCarName();
      const count = await this.getRacingAttmeptCount();

      this.printRacingResult(cars, count);

      const winner = this.calculateWinner(cars);
      this.printWinner(winner);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;

//자동차 이름을 입력 받는다 → 시도할 횟수를 받는다 -> 횟수만큼 이동 → 차수별 실행 결과를 보여준다 → 우승자를 안내한다
