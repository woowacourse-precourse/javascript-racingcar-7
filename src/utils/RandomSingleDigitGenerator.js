import { MissionUtils } from '@woowacourse/mission-utils';

class RandomSingleDigitGenerator {
  generate() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default RandomSingleDigitGenerator;
