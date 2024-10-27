import userInput from './input.js';
import CarsInputParser from './parser.js';
import validateCars from './validations.js';

const Cars = async () => {
  const cars = await userInput();
  const carsArray = CarsInputParser(cars);

  validateCars(carsArray);

  return carsArray;
};

export default Cars;
