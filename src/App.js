import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from './RacingGame.js';

class App {
  async run() {
    try {
      const racingGame = new RacingGame();
      const carNames = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      racingGame.setRacingCars(carNames);
      racingGame.setCount(Number(count));
      MissionUtils.Console.print('\n실행 결과');
      racingGame.startRacing();

      MissionUtils.Console.print(`최종 우승자 : ${racingGame.getWinner()}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
