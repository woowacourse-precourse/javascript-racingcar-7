import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNameArr = carNames.split(",").map((name) => name.trim());
    for (const name of carNameArr) {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름을 5자 이하로 작성해주세요.");
      }
    }

    const tryNumber = parseInt(
      await Console.readLineAsync("시도할 횟수는 몇회인가요?\n"),
      10
    );

    Console.print(carNameArr);
    Console.print(tryNumber);
  }
}

export default App;
