import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNumber = () => {
  const random = MissionUtils.Random.pickNumberInRange(0, 9);

  return random;
};
