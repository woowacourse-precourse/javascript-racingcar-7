import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constant.js';
import { validateCarNames, validateRoundCount } from './validation.js';

const getInput = async (message) => {
  const input = await Console.readLineAsync(message);

  return input.trim();
};

export const getCarNames = async () => {
  const input = await getInput(INPUT_MESSAGES.carNames);
  validateCarNames(input);

  return input.split(',');
};

export const getRoundCount = async () => {
  const input = await getInput(INPUT_MESSAGES.roundCount);
  validateRoundCount(input);

  return Number(input);
};
