import { validateCarLength } from './validations.js';

const CarsInputParser = cars => {
  const carsArray = cars.split(',');
  validateCarLength(carsArray);

  return carsArray;
};

export default CarsInputParser;
