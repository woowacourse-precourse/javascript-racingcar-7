import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import RacingGame from "./RacingGame.js";

class App {
  async run() {
    try {
      const inputValidator = new InputValidator();

      const carNamesInput = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = carNamesInput.split(",");
      inputValidator.validateCarNames(carNames);

      const moveCountInput = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      inputValidator.validateMoveCount(moveCountInput);
      const moveCount = Number(moveCountInput);

      const racingGame = new RacingGame(carNames);
      racingGame.startRace(moveCount);
      racingGame.printWinners();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
