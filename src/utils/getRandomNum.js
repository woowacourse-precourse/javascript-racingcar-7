import { MissionUtils } from '@woowacourse/mission-utils';

const getRandomNum = function getRandomNumFunc() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

export default getRandomNum;
