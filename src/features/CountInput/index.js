import userInput from './input.js';
import { validateNumber } from './validations.js';

const Count = async () => {
  const count = await userInput();
  validateNumber(count);

  return Number(count);
};

export default Count;
