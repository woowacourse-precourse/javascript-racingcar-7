import { validateCarLength } from './validations.js';

const CarsInputParser = cars => {
  const carsArray = cars.split(',').map(car => car.trim());
  validateCarLength(carsArray);

  return carsArray;
};

export default CarsInputParser;
