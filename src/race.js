import { moveCar } from './car.js';
import { displayResults } from './output.js';

export function play(cars, counts) {
  for (let count = 0; count < counts; count++) {
    cars.forEach(moveCar);
    displayResults(cars);
  }
}

export function getWinners(cars) {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
}
