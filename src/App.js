import { Console } from '@woowacourse/mission-utils';
import { validateCars, validateTrial } from './validation.js';
import { progressRacing, printRacingStatus } from './racing.js';
import { getWinner } from './winner.js';

class App {
  async run() {
    try {
      // 입력 받기
      const carsInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const cars = carsInput.replace(/\s+/g, '');
      const carList = cars.split(',');
      validateCars(carList);

      const trialInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const trial = parseInt(trialInput, 10);
      validateTrial(trial);

      // 경주 하기
      let racingStatus = Array.from({ length: carList.length }, () => 0);
      Console.print('\n실행 결과');

      for (const idx of Array(trial).keys()) {
        const stageResult = progressRacing(carList);
        racingStatus = racingStatus.map((x, y) => x + stageResult[y]);
        printRacingStatus(carList, racingStatus);
      }

      // 우승자 산출하기
      const winnerList = getWinner(carList, racingStatus);
      Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;