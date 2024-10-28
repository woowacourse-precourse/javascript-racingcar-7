import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import { ERROR_MESSAGES } from "./constants.js";

class App {
  async run() {
    try {
      const carNames = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");
      this.validateCarNames(carNames);
      await this.handleCarNames(carNames);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  validateCarNames(carNames) {
    const names = carNames.split(",").map((name) => name.trim());
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
      }
    });
  }

  async handleCarNames(carNames) {
    try {
      const raceCountInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");
      const raceCount = this.validateRaceCount(raceCountInput);
      Console.print("\n실행 결과");
      const game = new Game(carNames, raceCount);
      game.startRace();
      Console.print(`최종 우승자 : ${game.getWinners()}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  validateRaceCount(raceCount) {
    if (isNaN(raceCount)) {
      throw new Error(ERROR_MESSAGES.INVALID_RACE_COUNT);
    }

    const raceCountNumber = Number(raceCount);

    if (raceCountNumber === 0) {
      throw new Error(ERROR_MESSAGES.INVALID_RACE_COUNT_ZERO);
    }

    return raceCountNumber;
  }
}

export default App;