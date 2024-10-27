import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const racingCarsInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      const racingCars = racingCarsInput.split(",");
      const tryNumber =
        await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    } catch {
      Console.error;
    }
  }
}

export default App;
