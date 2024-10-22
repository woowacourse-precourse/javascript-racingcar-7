import { Random } from '@woowacourse/mission-utils';

const moveForward = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) {
    return 1;
  }
  return 0;
};

export default moveForward;
