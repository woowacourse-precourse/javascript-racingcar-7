import { MissionUtils } from '@woowacourse/mission-utils';

const random = {
  generateNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  },
};

export default random;
