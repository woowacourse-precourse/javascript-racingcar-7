import { Random } from '@woowacourse/mission-utils';

export default function getRandomNumber() {
  return Random.pickNumberInRange(1, 9);
}
