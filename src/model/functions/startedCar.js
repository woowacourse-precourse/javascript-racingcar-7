import { isStart } from './isStart.js';

export const startedCar = async (car) => {
  if (await isStart()) {
    car.go++;
  }
};
