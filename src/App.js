import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarNames()
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const carNames = input.split(",");
    this.checkDuplicatedCarNames(carNames)
    carNames.forEach((carName) => this.validateCarName(carName));
    return carNames;
  }

  checkDuplicatedCarNames(carNames = []) {
    if(new Set(carNames).size !== carNames.length){
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
}

export default App;
