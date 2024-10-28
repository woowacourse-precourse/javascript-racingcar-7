import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/constant';

export default function generateRandomNumber() {
  return Random.pickNumberInRange(
    RANDOM_NUMBER.minRange,
    RANDOM_NUMBER.maxRange
  );
}
