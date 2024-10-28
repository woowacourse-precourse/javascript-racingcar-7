import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.carNames = [];
    this.total = 0;
  }
  checkCarNames(inputString) {
    return inputString.includes(",");
  }
  async inputCarNames() {
    try {
      const names = await Console.readLineAsync(
        `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
      );

      if (this.checkCarNames(names)) {
        this.carNames = names.split(",");
      } else {
        throw new Error("[ERROR] 쉼표(,)를 구분자로 두어서 입력해야 합니다.");
      }
    } catch (error) {
      throw error;
    }
  }
  async run() {
    this.inputCarNames();
  }
}

export default App;
