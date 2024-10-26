import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 자동차 문자열 입력
    const inputCarNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
    );

    // 입력받은 문자열을 "," 기준으로 나눔
    const carNamesArray = inputCarNames.split(",");

    // 테스트 코드
    Console.print(carNamesArray);
  }
}

export default App;
