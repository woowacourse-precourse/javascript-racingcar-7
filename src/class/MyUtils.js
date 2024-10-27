import { Random } from '@woowacourse/mission-utils';

const MyUtils = {
  getRandomSingleDigit: () => {
    return Random.pickNumberInRange(0, 9);
  },
};

export default MyUtils;
