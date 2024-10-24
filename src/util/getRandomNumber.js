import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
