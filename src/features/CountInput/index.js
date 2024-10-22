import userInput from './input.js';
import validateCount from './validations.js';

const Count = async () => {
  const count = await userInput();
  validateCount(count);

  return Number(count);
};

export default Count;
