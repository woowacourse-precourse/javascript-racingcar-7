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

    // 파라미터 추가해서 5자 이외의 길이도 검사할 수 있게 해보자.
    for (let i = 0; i < userNames.length; i++) {
      checkValue.checkLength(userNames[i]);
    }
  }
}

export default App;
