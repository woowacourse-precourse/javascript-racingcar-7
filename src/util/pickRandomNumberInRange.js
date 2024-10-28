import { MissionUtils } from '@woowacourse/mission-utils';

function pickRandomNumberInRange(startRange, endRange) {
  return MissionUtils.Random.pickNumberInRange(startRange, endRange);
}

export default pickRandomNumberInRange;
