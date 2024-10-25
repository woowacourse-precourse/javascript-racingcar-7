import { Console } from '@woowacourse/mission-utils';

import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

import GameManager from './utils/GameManager.js';

class App {

  async run() {
    const input = await InputView.getNames();
    const gameManager = new GameManager(input);
    const attempts = await InputView.getAttempts();

    gameManager.repeatGameAttempts(attempts);

    const winnerNameString = gameManager.getWinnerNameString();

    if (winnerNameString.length > 0) {
      OutputView.printWinner(winnerNameString);
      return;
    }
    OutputView.printNoWinner();
  }
}
export default App;
