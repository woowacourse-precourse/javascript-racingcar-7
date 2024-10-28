import { Random } from '@woowacourse/mission-utils';

export function getRandomNumber(min, max) {
  return Random.pickNumberInRange(min, max);
}
