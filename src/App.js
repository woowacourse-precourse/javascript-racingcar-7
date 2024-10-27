import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = await App.getCarNames();
      const moveAttempts = await App.getMoveAttempts();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  static async getCarNames() {
    const inputNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = inputNames.split(',').map(name => name.trim());
    const MAX_CAR = 5;

    carNames.forEach(name => {
      if (name.length > MAX_CAR) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    });

    return carNames;
  }

  static async getMoveAttempts() {
    const inputAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const moveAttempts = parseInt(inputAttempts, 10);

    if (Number.isNaN(moveAttempts) || moveAttempts <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 양의 정수여야 합니다.');
    }

    return moveAttempts;
  }
}

export default App;
