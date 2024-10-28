import { Console } from '@woowacourse/mission-utils';
import { validateCarNames, checkAttemptCount } from './checkInput.js';
import { racing } from './racingCar.js';

class App {
  async run() {
    try {
      Console.print(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      const input = await Console.readLineAsync('');
      const carNames = input
        .split(',')
        .map((name) => name.trim())
        .filter((name) => name !== '');

      const carrArr = validateCarNames(carNames);

      Console.print('시도할 횟수는 몇 회인가요?');
      const attemptInput = await Console.readLineAsync('');
      const attemptCount = Number(attemptInput);
      const tryNum = checkAttemptCount(attemptCount);

      racing(tryNum, carrArr);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }
}
const app = new App();

export default App;
