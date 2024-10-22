import userInput from './input.js';
import CarsInputParser from './parser.js';
import { validateEmptyInput } from './validations.js';

const Cars = async () => {
  const cars = await userInput();
  validateEmptyInput(cars);

  return CarsInputParser(cars);
};

export default Cars;
