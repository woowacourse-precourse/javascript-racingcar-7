import { Console } from '@woowacourse/mission-utils';
import checkWinner from './utils/checkWinner.js';
import createCarList from './utils/createCarList.js';
import runCarRacing from './utils/runCarRacing.js';
import { parseCarNameInput, parseTurnInput } from './parseInput.js';

class App {
  async run() {
    const firstUserInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameList = parseCarNameInput(firstUserInput);
    const carList = createCarList(carNameList);

    const secondUserInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const turn = parseTurnInput(secondUserInput);

    runCarRacing(carList, turn);

    const winner = checkWinner(carList);

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
