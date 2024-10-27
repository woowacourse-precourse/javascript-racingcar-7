import { Random } from '@woowacourse/mission-utils';

export default function getMoveForward() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
}
