import { inputCarNames, inputTryCount } from './input.js';
import { validateCarName, validateTryCount } from './validation.js';

export async function carRacingProceed() {
  const carNameList = await inputCarNames();
  validateCarName(carNameList);

  const tryCount = await inputTryCount();
  validateTryCount(tryCount);
}
