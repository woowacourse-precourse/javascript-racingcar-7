import { Console } from '@woowacourse/mission-utils';
import moveForwardRandomly from './moveForwardRandomly.js';
import checkError from './checkError.js';

class App {
  async run() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const attemptNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const carNameArray = carNames.split(',');
    checkError(carNameArray);

    const moveForwardInformation = moveForwardRandomly(carNameArray, Number(attemptNumber));
    Console.print(moveForwardInformation);
  }
}

export default App;
