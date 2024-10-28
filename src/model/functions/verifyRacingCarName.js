import { validateCarName } from './validateCarName.js';

export const verifyRacingCarName = async (cars) => {
  const carsArray = [];
  const carNamesSet = new Set();

  for (const car of cars) {
    validateCarName(car, carNamesSet);

    carNamesSet.add(car);

    carsArray.push({ name: car, go: 0 });
  }

  return carsArray;
};
