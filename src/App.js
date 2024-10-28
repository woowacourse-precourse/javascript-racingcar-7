import { MissionUtils } from '@woowacourse/mission-utils';
import Race from './Race.js';

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attempts = await this.getAttempts();

      const game = new Race(carNames);
      MissionUtils.Console.print('\n실행 결과');
      await game.race(attempts);
      this.printWinners(game.getWinners());
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async getCarNames() {
    return await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
  }

  async getAttempts() {
    return await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
  }

  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
