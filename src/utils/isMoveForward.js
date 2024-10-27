import { Random } from '@woowacourse/mission-utils';

function getRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}

export default function isMoveForward() {
  return getRandomNumber() >= 4;
}
