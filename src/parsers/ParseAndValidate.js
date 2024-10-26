import { parseInputs } from './Parsing.js';
import { validateInput } from './Validate.js';

export const parseAndValidate = (input) => {
  const parsedInput = parseInputs(input);
  validateInput(parsedInput);
  return parsedInput;
};
