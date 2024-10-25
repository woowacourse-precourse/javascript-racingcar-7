import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const trialCount = await this.getTrialCount();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ');
    const carNames = input.split(',').map(name => name.trim());
    this.validateCarNames(carNames);
    Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
    return carNames;
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

  async getTrialCount() {
    const input = await Console.readLineAsync('시도할 횟수를 입력하세요: ');
    this.validateTrialCount(input);
    Console.print(`입력된 시도 횟수: ${input}`);
    return parseInt(input, 10);
  }

  validateTrialCount(input) {
    const trialCount = parseInt(input, 10);    
    if (isNaN(trialCount) || trialCount.toString() !== input.trim()) {
      throw new Error('시도할 횟수는 정수여야 하며, 숫자만 입력해야 합니다.');
    }
    if (trialCount <= 0) {
      throw new Error('시도할 횟수는 1이상의 숫자여야 합니다.');
    }
  }
}

export default App;
