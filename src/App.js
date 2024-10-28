import { Console } from '@woowacourse/mission-utils';
import Racing from './Racing.js';
import RacingManager from './RacingManager.js';
import Validation from './Validation.js';

class App {
  async run() {
    const validationClass = Validation;
    const racingManager = new RacingManager(validationClass);

    const carNames = await App.askCarNames();
    const cars = racingManager.register(carNames);

    const totalRounds = await App.askTotalRounds();
    const validTotalRounds = racingManager.normalizeTotalRounds(totalRounds);

    const racing = new Racing(validTotalRounds, cars);
    racing.play();
    racing.showResult();
    racing.announceWinners();
  }

  static async askCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    return carNames;
  }

  static async askTotalRounds() {
    const totalRounds =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return totalRounds;
  }
}

export default App;
