import { MissionUtils } from '@woowacourse/mission-utils';
import { MIN_RANDOM_NUM, MAX_RANDOM_NUM } from '../constants/constants.js';

const getRandomNum = function getRandomNumFunc() {
  return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUM, MAX_RANDOM_NUM);
};

export default getRandomNum;
