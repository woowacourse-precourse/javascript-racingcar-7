import { Console } from '@woowacourse/mission-utils';
import { validateCars } from './check_validation.js';
import { validateTrial } from './check_validation.js';
import { progressRacing } from './racing.js';
import { printRacingStatus } from './racing.js';
import { getWinner } from './winner.js';

/* 기능을 가진 함수를 다른 파일로 분리하되 main에서(App.js) 프로그램 로직의 흐름이 보이도록 함 */

class App {
  async run() {
    try {
      /* 입력 받기 */
      const carsInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
      const cars = carsInput.replace(/\s+/g, '');
      const carList = cars.split(',');
      validateCars(carList); // 각 자동차 이름이 5자 이하인지 확인

      const trialInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const trial = parseInt(trialInput, 10);
      validateTrial(trial); // 시도 횟수가 양의 정수인지 확인

      /* 경주 하기 */
      let racingStatus = Array.from({length: carList.length}, () => 0);
      let stageResult;

      Console.print('\n실행 결과');
      for (const idx of Array(trial).keys()) {
        stageResult = progressRacing(carList);
        racingStatus = racingStatus.map((x, y) => x + stageResult[y]);
        printRacingStatus(carList, racingStatus);
      }

      /* 우승자 산출하기 */
      const winnerList = getWinner(carList, racingStatus);
      Console.print('최종 우승자 : ' + winnerList.join(', '));

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
