import { Console } from "@woowacourse/mission-utils";
import inputParser from "./inputParser.js";
import RacingGame from "./RacingGame.js";

class App {
  async run() {
    let carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = inputParser(carNamesInput);
    let tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    const game = new RacingGame(carNames, Number(tryCount));
    const result = game.raceCars();

    return result;
  }
}

export default App;
