import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
