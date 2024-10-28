import { Console } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
import { Race } from './Race.js';

class App {
  run() {
    return new Promise((resolve, reject) => {
      this.askCarNames()
        .then((carNames) => {
          const cars = carNames.map((name) => new Car(name.trim()));
          return this.askRounds().then((rounds) => ({ cars, rounds }));
        })
        .then(({ cars, rounds }) => {
          const race = new Race(cars, rounds);
          race.start();
          resolve();
        })
        .catch((error) => {
          Console.print(error.message);
          reject(error);
        })
        .finally(() => {
          Console.print('프로그램을 종료합니다.');
        });
    });
  }

  askCarNames() {
    return Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n').then((input) => {
      return input.split(',');
    });
  }

  askRounds() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n').then((input) => {
      const rounds = parseInt(input, 10);
      if (isNaN(rounds) || rounds <= 0) {
        throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
      }
      return rounds;
    });
  }
}

export default App;

const app = new App();
app.run();
