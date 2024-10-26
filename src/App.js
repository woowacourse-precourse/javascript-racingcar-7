import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import RacingGame from './RacingGame.js';
class App {
  async run() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const cars = carNames.split(',').map((carName) => new Car(carName.trim()));

    const attemptCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const racingGame = new RacingGame(cars, attemptCount);
    racingGame.play()
    console.log(cars)
  }
}

export default App;
