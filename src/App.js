import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarName();
    Console.print(carNames);
  }

  // 자동차 입력
  async getCarName() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    const input = await Console.readLineAsync();
    const carNames = input.split(",");
    return carNames;
  }
}

export default App;
