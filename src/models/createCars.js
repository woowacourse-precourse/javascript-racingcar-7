import Car from './Car.js';

export const createCars = (names) => names.map((name) => new Car(name));
