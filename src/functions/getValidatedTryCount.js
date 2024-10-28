import { PRINT_MESSAGES } from '../constants/messages.js';
import { getUserInput } from '../utils/ioModule.js';
import { validateTryCount } from '../validator/validatePipeline.js';

const getValidatedTryCount = async function getValidatedTryCountFunc() {
  const inputForTryCount = await getUserInput(PRINT_MESSAGES.INPUT.TRY_COUNT);
  validateTryCount(inputForTryCount);

  return Number(inputForTryCount);
};

export default getValidatedTryCount;
