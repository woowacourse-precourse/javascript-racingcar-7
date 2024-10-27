import { Console } from '@woowacourse/mission-utils';
import { raceController } from './Controller.js';

class App {
  async run() {
    const inputNames = (
      await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      )
    ).trim();

    const inputAttemps = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    try {
      const Controller = new raceController(inputNames, inputAttemps);
      Controller.startRace();
    } catch (error) {
      throw new Error('[ERROR]' + error.message);
    }
  }
}

export default App;
