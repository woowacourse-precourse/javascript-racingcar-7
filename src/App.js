import { MissionUtils } from '@woowacourse/mission-utils';
import { inputHandler } from './inputHandler.js';
import RacingGamePlayer from './RacingGamePlayer.js';

class App {
  async run() {
    try {
      const carNames = await inputHandler.getCarNamesInput();
      const tryNumber = await inputHandler.getTryNumberInput();
      const racingGame = new RacingGamePlayer(carNames, tryNumber);
      racingGame.play();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
