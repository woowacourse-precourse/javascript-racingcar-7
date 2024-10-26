import {Console, Random} from "@woowacourse/mission-utils"

class App {
  async run() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    const carNames = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const moveCount = await Console.readLineAsync("");

    Console.print("실행 결과");

    Console.print("최종 우승자 : ");

  }
}

export default App;
