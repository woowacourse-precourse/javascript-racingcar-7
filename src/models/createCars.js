import Car from './Car.js';

export const createCars = (names) => {
  return names.map((name) => new Car(name));
};
