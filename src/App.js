import { Console } from "@woowacourse/mission-utils";
class App {
  parseCarNames(carNames) {
    return carNames.split(",").map((carName) => {
      return { name: carName.trim(), result: "" };
    });
  }

  async getCarNameAndAttempts() {
    try {
      const carName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const cars = this.parseCarNames(carName);

      const attempts = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
    } catch (error) {}
  }
  async run() {
    this.getCarNameAndAttempts();
  }
}

export default App;
