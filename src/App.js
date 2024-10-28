import { Console } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Race from "./Race.js";
import Winner from "./Winner.js";

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    Validate.inputValidate(CAR_NAME, '자동차 이름');

    let maxAttempts = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    maxAttempts = Validate.attemptsValidate(maxAttempts, '시도 횟수'); // 유효성 체크 및 숫자로 타입 변경

    //, 기준으로 이름 분리와 함께 CAR(이름, 위치) 오브젝트 생성.
    const CAR_NAME_ARRAY = CAR_NAME.split(',').map(value => value.trim());
    const CAR_POSITION_ARRAY = CAR_NAME_ARRAY.map(n => 0);
    const CAR = {
      name: CAR_NAME_ARRAY,
      position: CAR_POSITION_ARRAY,
    };

    CAR.name.forEach(Validate.nameValidate);

    Console.print("\n실행 결과");
    Race.roundProgress(maxAttempts, CAR);

    const WINNER_ARRAY = Winner.findWinner(CAR);
    Winner.printWinner(WINNER_ARRAY);
  }
}

export default App;
