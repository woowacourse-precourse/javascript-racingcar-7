import { MissionUtils } from '@woowacourse/mission-utils';
import getCarNames from './UserInput/getCarNames.js';
import getMoveCount from './UserInput/getMoveCount.js';
import printWinner from './UserOutput/printWinner.js';
import startRace from './Race/startRace.js';

class App {
  async run() {
    try {
      const names = await getCarNames();
      const trials = await getMoveCount();

      MissionUtils.Console.print('실행 결과');
      const results = startRace(names, trials);
      printWinner(results);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
