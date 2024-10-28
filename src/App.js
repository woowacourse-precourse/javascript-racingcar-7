import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getCarNames() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArray = carNamesInput.split(',');
    carNameArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
      }
    });

    return carNameArray;
  }
  async getAttempts() {
    const attemptInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const attemptNum = parseInt(attemptInput);
    if (isNaN(attemptNum) || attemptNum <= 0) {
      throw new Error('[ERROR] 시도 횟수는 양수만 가능합니다.');
    }
    return attemptNum;
  }
}

export default App;
