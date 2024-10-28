import { Random } from '@woowacourse/mission-utils';

class RandomUtil {
  static getRandomNumber(from = 0, to = 9) {
    return Random.pickNumberInRange(from, to);
  }
}

export default RandomUtil;
