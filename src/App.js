import { Console } from "@woowacourse/mission-utils";
class App {
  INPUT_CAR_NAME =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  INPUT_TRY_COUNT = "시도할 회수는 몇회인가요?\n";
  carsName = [];

  async getUserInput(message) {
    return await Console.readLineAsync(message);
  }
  async showInput(message) {
    return await Console.print(message);
  }

  validateCarName(name) {
    if (name.length < 1 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    } else if (/[^a-zA-Zㄱ-ㅎ각-핳,]/.test(name)) {
      throw new Error(
        "[ERROR] 자동차 이름은 영어 혹은 한글만 가능하며, 자동차간 구분자는 ,(컴마)로만 가능합니다."
      );
    }

    return name;
  }

  validateTryCount(count) {
    if (isNaN(count)) {
      throw new Error("[ERROR] 시도할 회수는 숫자만 입력할 수 있습니다.");
    }
  }

  async run() {
    const names = await this.getUserInput(this.INPUT_CAR_NAME);
    const tryCount = await this.getUserInput(this.INPUT_TRY_COUNT);

    this.carsName = names
      .split(",")
      .map((el) => this.validateCarName(el.trim()));

    this.validateTryCount(tryCount);
  }
}

export default App;
