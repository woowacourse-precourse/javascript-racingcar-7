import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils/src";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const times = await this.getTimes();
    const scores = this.setScores(carNames);
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const carNames = input.split(",");
    this.checkDuplicatedCarNames(carNames);
    carNames.forEach((carName) => this.validateCarName(carName));
    return carNames;
  }

  checkDuplicatedCarNames(carNames = []) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
  }

  validateCarName(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    }

    if (!/^[a-zA-Z0-9]*$/.test(carName)) {
      throw new Error(
        "[ERROR] 자동차 이름은 영문 또는 숫자 조합만 가능합니다.",
      );
    }
  }

  async getTimes() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const times = Number(input);
    this.validateTimes(times);
    return times;
  }

  validateTimes(times) {
    if (isNaN(times)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력하실 수 없습니다.");
    }

    if (times <= 0) {
      throw new Error("[ERROR] 양수만 입력하실 수 있습니다.");
    }
  }

  setScores(carNames) {
    let scores = {};
    carNames.forEach((car) => (scores[car] = 0));
    return scores;
  }
}

export default App;
