import { Console } from "@woowacourse/mission-utils";
import inputParser from "./utils/inputParser.js";
import RacingGame from "./RacingGame.js";
import { nameValidation, tryValidation } from "./utils/validators.js";

class App {
  async run() {
    let carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = inputParser(carNamesInput);
    nameValidation(carNames);

    let tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    tryValidation(tryCount);

    const game = new RacingGame(carNames, Number(tryCount));
    const result = game.raceCars();

    return result;
  }
}

export default App;
