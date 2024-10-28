import { Random } from '@woowacourse/mission-utils';

const moveOnFourOrOver = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
};

const moveCars = (cars) => {
  for (const car of cars) {
    if (moveOnFourOrOver()) {
      car.move();
    }
  }
};

export { moveCars };
