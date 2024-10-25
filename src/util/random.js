import { Random } from '@woowacourse/mission-utils';
import { RANDOM_OPTIONS } from '../constant/option.js';

export function getRandomNumberInRange(
  min = RANDOM_OPTIONS.MINIMUM_VALUE,
  max = RANDOM_OPTIONS.MAXIMUM_VALUE
) {
  return Random.pickNumberInRange(min, max);
}
