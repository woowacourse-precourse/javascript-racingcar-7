import { MissionUtils } from "@woowacourse/mission-utils";
import splitInput from "./splitInput.js";
import validNumber from "./validNumber.js";

class App {
  async run() {
    // 1. 자동차 이름 입력 처리
    const INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const CARNAMES = splitInput(INPUT);

    // 2. 이동 거리 처리
    const NUMINPUT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const TIMES = validNumber(NUMINPUT);

    MissionUtils.Console.print("\n실행 결과");

    // 3. 경기 진행
    var player1 = 0;
    var player2 = 0;
    var player3 = 0;
    var i=0;
    while (i<TIMES) {
      player1=MissionUtils.Random.pickNumberInRange(0, 9);
      player2=MissionUtils.Random.pickNumberInRange(0, 9);
      player3=MissionUtils.Random.pickNumberInRange(0, 9);
      if(playGame(player1, player2, player3)) {
        MissionUtils.Console.print("");
      }
      i++
    }
  }
}

export default App;
