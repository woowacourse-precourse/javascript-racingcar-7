import { Console } from "@woowacourse/mission-utils";
import { RacingGame } from "./RacingGame";

class App {
  async run() {
    const INPUT = await Console.readLineAsync("자동차 이름을 입력하세요 : ");
    const CARNAMES = INPUT.trim().split(",");

    const ROUNDS = parseInt(
      await Console.readLineAsync("이동 횟수를 입력하세요 : "),
      10
    );
    const RESULT = new RacingGame(CARNAMES, ROUNDS);
    RESULT.play();
  }
}

export default App;
