import { Console, MissionUtils } from '@woowacourse/mission-utils';
import displayRacing from './displayRacing.js';

const runRace = (carNames, attemptTimes) => {
  let result = carNames.map(name => ({ name, position: '' }));

  Console.print(`\n실행 결과`);

  for (let i = 0; i < attemptTimes; i++) {
    result = result.map(car => {
      const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);
      let newPosition = car.position;
      if (RANDOM_VALUE >= 4) {
        newPosition += '-';
      }
      return { ...car, position: newPosition };
    });
    displayRacing(result);
  }
  return result;
};

export default runRace;
