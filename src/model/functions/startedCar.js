import { isStart } from './isStart.js';

export const startedCar = (car) => {
  if (isStart()) {
    car.go += 1;
  }
};
