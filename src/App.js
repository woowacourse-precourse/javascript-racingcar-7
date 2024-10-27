import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }
}

class App {
  async run() {
    const carNames = await this.readCarNames();
    this.validateCarNames(carNames);
  }
  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input.split(",").map((name) => name.trim());
  }
  validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }
    carNames.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    });
  }
}
export default App;
