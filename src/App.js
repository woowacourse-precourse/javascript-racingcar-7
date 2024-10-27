import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from './RacingGame.js';

class App {
  async run() {
    try {
      const racingGame = new RacingGame();
      const carNames = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      racingGame.setRacingCars(carNames);
      MissionUtils.Console.print(racingGame.carList);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
