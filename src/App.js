import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const CARNAMES = await Console.readLineAsync("자동차 이름을 입력하세요 : ")
      .trim("")
      .split(",");
    const ROUNDS = parseInt(
      await Console.readLineAsync("이동 횟수를 입력하세요 : "),
      10
    );
  }
}

export default App;
