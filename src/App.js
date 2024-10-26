// App.js
import { MissionUtils } from '@woowacourse/mission-utils';
import { Race } from './race.js';

class App {
  async run() {
    const carArr = await this.getCarNames();
    const trialCount = await this.getTrialCount();
    this.processRace(carArr, trialCount);
  }

  async getCarNames() {
    const cars = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return cars.split(',');
  }

  async getTrialCount() {
    const trialCount = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    return Number(trialCount);
  }

  processRace(carArr, trialCount) {
    const race = new Race(carArr, trialCount);
    try {
      const results = race.startRace();
      this.displayResults(results);
      const winners = race.determineWinners();
      this.displayWinners(winners);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  displayResults(results) {
    MissionUtils.Console.print('\n실행 결과');
    results.forEach((result, index) => {
      MissionUtils.Console.print(result + '\n');
    });
  }

  displayWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
