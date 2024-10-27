import { Random } from '@woowacourse/mission-utils';

const GameUtils = {
  getRandomSingleDigit: () => {
    return Random.pickNumberInRange(0, 9);
  },
};

export default GameUtils;
