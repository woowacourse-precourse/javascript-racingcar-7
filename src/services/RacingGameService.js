import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../models/Car.js';

import { printCarPosition } from '../utils/OutputUtils.js';

export function makeCars(names) {
  return names.map((name) => new Car(name));
}

export function getMaxPosition(carList) {
  return Math.max(carList.map((car) => car.position));
}

export function findCarWithMaxPosition(carList, maxPosition) {
  return carList
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
}

export function isHighEnough() {
  const randomValue = MissionUtils.Random.pickNumberInRange(1, 10);
  return randomValue >= 4;
}

export function moveCarForward(car) {
  if (isHighEnough()) {
    car.move();
  }
}

export function repeat(carList, number) {
  MissionUtils.Console.print('실행 결과');
  for (let i = 0; i < number; i++) {
    carList.forEach((car) => {
      moveCarForward(car);
      printCarPosition(car.name, car.position);
    });
    MissionUtils.Console.print('\n');
  }
}
