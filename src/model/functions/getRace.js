import { startedCar } from './startedCar.js';

export const getRace = (cars) => {
  cars.forEach((car) => startedCar(car));
  return cars;
};
