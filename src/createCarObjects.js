import { Car } from './Car.js';

const createCarObjectsFromNames = (carNames) => {
  return carNames.map((name) => new Car(name));
};

export { createCarObjectsFromNames };
