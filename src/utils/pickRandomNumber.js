import { MAGICNUMBER } from '../constants/index.js';
import { Random } from '@woowacourse/mission-utils';

const pickRandomNumber = () => {
  return Random.pickNumberInRange(
    MAGICNUMBER.STARTINCLUSIVE,
    MAGICNUMBER.ENDINCLUSIVE,
  );
};

export default pickRandomNumber;
