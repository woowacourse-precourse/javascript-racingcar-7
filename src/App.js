import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNamesArr = carNames.split(',').map((name) => name.trim());

    if (carNamesArr.length < 2) throw '자동차는 두 대 이상 작성해주세요.';
    if (carNamesArr.some((carName) => carName.length > 5))
      throw '자동차 이름은 5글자 이하여야 합니다.';

    return carNamesArr;
  }

  async getRaceAttempts() {
    const raceAttempts = await Console.readLineAsync(
      '시도할 횟수를 입력하세요\n',
    );
    const attempts = parseInt(raceAttempts, 10);

    if (isNaN(attempts) || attempts <= 0)
      throw '시도 횟수는 1 이상의 숫자여야 합니다.';

    return attempts;
  }

  async run() {
    try {
      const carNames = await this.getCarNames();
      const raceAttempts = await this.getRaceAttempts();
    } catch (error) {
      throw new Error('[ERROR] ' + error.message);
    }
  }
}

export default App;
