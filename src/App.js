import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 자동차 이름을 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    let userInput = await Console.readLineAsync("");
    let userNames = userInput.split(",");
    let userCounts = new Array(userNames.length).fill(0);
  }
}

export default App;
