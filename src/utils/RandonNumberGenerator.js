import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_SETTINGS } from '../constants/Settings';

class RandomNumberGenerator {
  static pickNumberInRange() {
    return Random.pickNumberInRange(RANDOM_NUMBER_SETTINGS.MIN, RANDOM_NUMBER_SETTINGS.MAX);
  }
}

export default RandomNumberGenerator;
