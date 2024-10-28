import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { checkCarNum } from './checkInput.js';

class App {
  async run() {
    try {
      Console.print(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );

      const input = await Console.readLineAsync('');
      const carNames = input.split(',');

      checkCarNum(carNames);

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
