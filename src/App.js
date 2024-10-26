import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = []; // 자동차 이름 목록
  }

  async run() {
    await this.getCarNames(); // 자동차 이름 요청
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = this.validateCarNames(input.split(",")); // 자동차 이름 검증
  }
}

export default App;
