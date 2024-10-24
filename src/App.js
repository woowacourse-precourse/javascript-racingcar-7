import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.getCarNames();
  }

  async getCarNames() {
    try {
      const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ');
      const carNames = input.split(',').map(name => name.trim());
      this.validateCarNames(carNames);
      Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new Error('자동차 이름을 하나 이상 입력해야 합니다.');
    }

    carNames.forEach(name => {
      if (name.length === 0) {
        throw new Error('자동차 이름은 공백일 수 없습니다.');
      }
      if (name.length > 5) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
    });
  }
}

export default App;
