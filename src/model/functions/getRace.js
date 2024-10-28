import { startedCar } from './startedCar.js';

export const getRace = async (cars) => {
  for (const car of cars) {
    await startedCar(car);
  }

  return cars;
};
