import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { CONSTANTS } from './constant/Constant.js';
import { printCurrentRound } from './utils/Print.js';

export const startRace = (carNames, moveAttempts) => {
  const raceResults = carNames.map((name) => new Car(name));

  for (let i = 0; i < moveAttempts; i += 1) {
    moveCars(raceResults);
    printCurrentRound(raceResults);
  }

  return raceResults;
};

const moveCars = (cars) => {
  cars.forEach((car) => {
    if (canMove()) {
      car.move();
    }
  });
};

const canMove = () => Random.pickNumberInRange(0, CONSTANTS.MAX_RANDOM_RANGE) >= CONSTANTS.MIN_MOVABLE_NUMBER;
