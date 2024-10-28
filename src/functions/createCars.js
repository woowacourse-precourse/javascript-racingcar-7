import Car from '../car/Car.js';

const createCars = function createCarsFunc(carNamesArray) {
  return carNamesArray.map((name) => new Car(name));
};

export default createCars;
