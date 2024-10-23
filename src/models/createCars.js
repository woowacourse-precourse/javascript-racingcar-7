import Car from './Car';

export const createCars = (names) => {
  return names.map((name) => new Car(name));
};
