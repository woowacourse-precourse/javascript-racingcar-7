import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};
