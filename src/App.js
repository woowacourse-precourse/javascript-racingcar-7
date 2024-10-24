import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = this.parseCarNames(input);
      this.validateCarNames(carNames);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  parseCarNames(input) {
    return input.split(",").map((name) => name.trim());
  }

  validateCarNames(carNames) {
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
    carNames.forEach((name) => {
      if (name.length < 1 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.");
      }
    });
  }
}

export default App;
