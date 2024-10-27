import {
  isCarNameValid,
  isPlayerValid,
  isTurnValid,
} from "./utils/validation.js";
import Race from "./Race.js";
import { raceWinnerOutput } from "./output.js";
import { findWinner } from "./utils/calculator.js";
import { handleError } from "./utils/error.js";
import { input } from "./input.js";

class App {
  async run() {
    try {
      let raceResult = {};

      const carList = await input(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const cars = await carList.split(",").map((car) => car.trim());
      isPlayerValid(cars);
      for (const car of cars) {
        isCarNameValid(car);
      }

      const turnInput = await input("시도할 횟수는 몇 회인가요?\n");
      const turn = parseInt(turnInput);
      isTurnValid(turn);

      const race = new Race(cars, turn);
      raceResult = race.play();

      const winners = findWinner(raceResult);
      raceWinnerOutput(winners);
    } catch (error) {
      handleError(error);
    }
  }
}

export default App;
