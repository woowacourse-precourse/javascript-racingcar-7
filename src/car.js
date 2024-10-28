import { Random } from '@woowacourse/mission-utils';

export function initializeCars(carNames) {
  return carNames.map((name) => ({ name, position: 0 }));
}

export function moveCar(car) {
  const randomValue = Random.pickNumberInRange(0, 9);
  if (randomValue >= 4) car.position += 1;
}
