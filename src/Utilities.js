import { Random } from '@woowacourse/mission-utils';

export function getRandomeNumber(min, max) {
  return Random.pickNumberInRange(min, max);
}