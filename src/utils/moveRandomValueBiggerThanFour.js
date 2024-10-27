import { Random } from '@woowacourse/mission-utils';

export function moveRandomValueBiggerThanFour(car) {
  const randomValue = Random.pickNumberInRange(0, 9);
  if (randomValue >= 4) {
    car.forwardMove();
  }
}
