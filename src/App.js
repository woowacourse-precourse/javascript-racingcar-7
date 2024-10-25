import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Racing from './Racing.js';

class App {
  async run() {
    const carNames = await App.askCarNames();
    const parsedNames = App.parseCarNames(carNames);
    const cars = parsedNames.map((name) => new Car(name));

    const totalRounds = await App.askTotalRounds();
    const convertedTotalRounds = App.totalRoundsToNumber(totalRounds);
    const racing = new Racing(convertedTotalRounds, cars);

    racing.play();
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

  static totalRoundsToNumber(totalRounds) {
    return Number(totalRounds);
  }
}

export default App;
