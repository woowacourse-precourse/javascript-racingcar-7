import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../models/Car.js';

import { printCarPosition } from '../utils/OutputUtils.js';

import { GREETING_RESULT_PROMPT } from '../constants.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;
const THRESHOLD_RANDOM_NUMBER = 4;

export function makeCars(names) {
  return names.map((name) => new Car(name));
}

export function getMaxPosition(carList) {
  return Math.max(...carList.map((car) => car.position));
}

export function findCarWithMaxPosition(carList, maxPosition) {
  return carList
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
}

export function isHighEnough() {
  const randomValue = MissionUtils.Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  return randomValue >= THRESHOLD_RANDOM_NUMBER;
}

export function moveCarForward(car) {
  if (isHighEnough()) {
    car.move();
  }
}

export function repeat(carList, number) {
  MissionUtils.Console.print(GREETING_RESULT_PROMPT);
  for (let i = 0; i < number; i++) {
    carList.forEach((car) => {
      moveCarForward(car);
      printCarPosition(car.name, car.position);
    });
    MissionUtils.Console.print('\n');
  }
}
