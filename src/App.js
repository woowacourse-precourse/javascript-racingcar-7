import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { checkCarNum, checkAttemptCount } from './checkInput.js';

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

      checkCarNum(carNames);

      // 시도 횟수 입력받기
      Console.print('시도할 횟수는 몇 회인가요?');
      const attemptInput = await Console.readLineAsync('');
      const attemptCount = Number(attemptInput);
      checkAttemptCount(attemptCount);

      let random = MissionUtils.Random.pickNumberInRange(0, 9);
      console.log(random);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}
const app = new App();
app.run();
export default App;
