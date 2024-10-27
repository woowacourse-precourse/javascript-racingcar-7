import { Console } from '@woowacourse/mission-utils';
import {
  checkDuplicateCarName,
  validateCarName,
} from './validation/validateCarName.js';

const determineCarName = (input) => {
  const names = input.split(',');
  names.forEach((name) => validateCarName(name));
  checkDuplicateCarName(names);
};

class App {
  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    determineCarName(input);
    const raceNumber =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
