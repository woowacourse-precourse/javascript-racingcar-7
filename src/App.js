import getInput from './input/getInput.js';
import parseCarNameInput from './input/parseCarNameInput.js';
import { checkCarName, checkMoveCount } from './input/validateInput.js';
import executeRace from './game/executeRace.js';
import printString from './output/printString.js';


class App {
  async run() {
    const carNameList = parseCarNameInput(await getInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'));
    checkCarName(carNameList);

    const moveCount = Number(await getInput('시도할 횟수는 몇 회인가요?\n'));
    checkMoveCount(moveCount);

    const winnerList = executeRace(carNameList, moveCount);
    printString(`최종 우승자 : ${winnerList.join(', ')}`);

  }
}

export default App;
