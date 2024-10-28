import printResult from '../UserOutput/printResult.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const startRace = (names, trials) => {
  const results = names.map((name) => {
    let distance = 0;
    for (let i = 0; i < trials; i++) {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        distance++;
      }
    }
    printResult(name, distance);
    return { name, distance };
  });
  return results;
};

export default startRace;
