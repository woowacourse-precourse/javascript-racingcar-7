import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자 입력 받기 
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

      const inputTryCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회 인가요?\n'
      )
  }
}

export default App;