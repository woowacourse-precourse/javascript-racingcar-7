import { Console } from "@woowacourse/mission-utils";
import CheckValue from "./CheckValue";

class App {
  async run() {
    const checkValue = new CheckValue();

    // 자동차 이름을 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    let userInput = await Console.readLineAsync("");
    let userNames = userInput.split(",");
    let userCounts = new Array(userNames.length).fill(0);

    for (let i = 0; i < userNames.length; i++) {
      checkValue.checkLength(userNames[i], 5);
    }

    // 시도할 횟수를 입력
    Console.print("시도할 횟수는 몇 회인가요?");
    let maxCount = await Console.readLineAsync("");
    if (isNaN(maxCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    maxCount = parseInt(maxCount, 10);
  }
}

export default App;
