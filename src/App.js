import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 자동차 이름 입력 및 이동 횟수 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let name_input = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const loop = await Console.readLineAsync("");
    Console.print(`${name_input}, ${loop}`);
  }
}

export default App;
