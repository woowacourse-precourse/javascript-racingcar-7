import { Console } from '@woowacourse/mission-utils';
import { CAR_NAME_VALIDATOR, ATTEMPT_TIMES_VALIDATOR } from './Validators.js';
import runRace from './runRace.js';
import getWinners from './winner.js';

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const ATTEMPT_TIMES =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const CAR_NAME_ARRAY = CAR_NAME.trim()
      .split(',')
      .map(name => name.trim());

    CAR_NAME_VALIDATOR(CAR_NAME_ARRAY);
    ATTEMPT_TIMES_VALIDATOR(ATTEMPT_TIMES);

    const RACE_RESULT = runRace(CAR_NAME_ARRAY, ATTEMPT_TIMES);
    const WINNERS = getWinners(RACE_RESULT);

    Console.print(`최종 우승자 : ${WINNERS.join(', ')}`);
  }
}

export default App;
