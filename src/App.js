import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import runRepeat from './runRepeat.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const inputString = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      Validator.nameString(inputString);

      const nameArray = inputString.split(',');
      Validator.nameArray(nameArray);

      const carArray = nameArray.map((name) => new Car(name));

      const repeatCount = Number(
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
      );
      Validator.repeatCount(repeatCount);

      runRepeat(carArray, repeatCount);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
