import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Validator from './Validator.js';
import RacingGame from './RacingGame.js';

class App {
  async run() {
    try {
      const validator = new Validator();

      const inputCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      validator.nameValidate(inputCarNames.split(','));

      const cars = inputCarNames.split(',').map(carName => new Car(carName));

      const inputTryCnt =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const tryCnt = Number(inputTryCnt);

      validator.tryCntValidate(tryCnt);

      const game = new RacingGame(cars, tryCnt);
      game.play();

      game.printResult();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
