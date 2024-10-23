import Car from '../models/Car';

export const createCars = (names) => {
  return names.map((name) => new Car(name));
};
