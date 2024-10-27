import moveForward from './moveForward.js';
import { printRaceStatus } from './display.js';

const runRace = (cars, count) => {
  const currentPos = new Array(cars.length).fill(0);

  for (let c = 0; c < count; c++) {
    cars.forEach((_, idx) => {
      currentPos[idx] += moveForward();
    });
    printRaceStatus(cars, currentPos);
  }

  return currentPos;
};

export default runRace;
