import { Console } from '@woowacourse/mission-utils';
import checkWinner from './utils/checkWinner.js';
import runCarRacing from './utils/runCarRacing.js';
import { parseCarNameInput, parseTurnInput } from './utils/parseInput.js';
import { InputComment, OutputComment } from './constants/displayConstant.js';

class App {
  async run() {
    const firstUserInput = await Console.readLineAsync(InputComment.CAR_NAME);
    const carList = parseCarNameInput(firstUserInput);

    const secondUserInput = await Console.readLineAsync(InputComment.TURN);
    const turn = parseTurnInput(secondUserInput);

    runCarRacing(carList, turn);

    const winner = checkWinner(carList);

    Console.print(`${OutputComment.WINNER_TITLE} : ${winner}`);
  }
}

export default App;
