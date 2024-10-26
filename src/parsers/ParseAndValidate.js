import { parseInputs } from './Parsing.js';
import { validateInput } from './Validate.js';

export const parseAndValidate = (input) => {
  const parsedInputCar = parseInputs(input.car);
  validateInput({ car: parsedInputCar, count: input.count });
  return { car: parsedInputCar, count: input.count };
};
