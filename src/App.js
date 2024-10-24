import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/message.js";

class App {
  getRacingCarName = async () => {
    await Console.readLineAsync(INPUT_MESSAGE.carName);
  };
  async run() {}
}

export default App;

//자동차 이름을 입력 받는다 → 시도할 횟수를 받는다 -> 횟수만큼 이동 → 차수별 실행 결과를 보여준다 → 우승자를 안내한다
