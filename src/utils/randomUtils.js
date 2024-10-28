import { Random } from '@woowacourse/mission-utils';

const randomUtils = {
  shouldMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }
};

export default randomUtils;
