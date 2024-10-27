import { Random } from '@woowacourse/mission-utils';

function isCarMoving() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) {
    return 1;
  }
  return 0;
}

export default isCarMoving;
