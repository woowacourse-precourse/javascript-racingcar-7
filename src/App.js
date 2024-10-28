import { Console } from '@woowacourse/mission-utils';

import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import {
  getValidChallengerNameList,
  getValidAttemptValue,
} from './utils/GetValidInput.js';
import GameManager from './utils/GameManager.js';

class App {
  async run() {
    const namesInput = await InputView.getNames();
    const challengerNameList = getValidChallengerNameList(namesInput);

    const attemptsInput = await InputView.getAttempts();
    const attempts = getValidAttemptValue(attemptsInput);

    const gameManager = new GameManager(challengerNameList, attempts);
    gameManager.playGameAsAttemps();

    const winnerNameString = gameManager.getWinnerNameString();
    OutputView.printGameResult(winnerNameString);
  }
}
export default App;
