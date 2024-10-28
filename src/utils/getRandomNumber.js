import { MissionUtils } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

export default getRandomNumber;
