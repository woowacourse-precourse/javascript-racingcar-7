import { Random } from '@woowacourse/mission-utils';

export function isAdvancePossible() {
  return Random.pickNumberInRange(0, 9) >= 4;
}

export function getCars(carInput) {
  return carInput
    .split(',')
    .map((car) => car.trim())
    .filter((car) => car !== '');
}
