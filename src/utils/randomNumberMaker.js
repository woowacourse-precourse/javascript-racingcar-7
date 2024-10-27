import { MissionUtils } from '@woowacourse/mission-utils';

export const randomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};
