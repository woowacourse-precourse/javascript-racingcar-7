import { MissionUtils } from '@woowacourse/mission-utils';

const runRace = (carNames, attemptTimes) => {
  let result = carNames.map(name => ({ name, position: '' }));

  for (let i = 0; i < attemptTimes; i++) {
    result = result.map(car => {
      const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);
      let newPosition = car.position;
      if (RANDOM_VALUE >= 4) {
        newPosition += '-';
      }
      return { ...car, position: newPosition };
    });
  }
  return result;
};

export default runRace;
