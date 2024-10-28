import { MAGICNUMBER } from '../constants/index.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const pickRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    MAGICNUMBER.STARTINCLUSIVE,
    MAGICNUMBER.ENDINCLUSIVE,
  );
};

export default pickRandomNumber;
