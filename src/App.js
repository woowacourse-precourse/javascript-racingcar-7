import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const firstUserInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    const secondUserInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    const winner = [];
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default App;
