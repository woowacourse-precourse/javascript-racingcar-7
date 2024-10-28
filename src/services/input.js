import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constant.js';

const getInput = async (message) => {
  const input = await Console.readLineAsync(message);

  return input.trim();
};

export const getCarNames = async () => {
  const input = await getInput(INPUT_MESSAGES.carNames);

  return input.split(',');
};

export const getRoundCount = async () => {
  const input = await getInput(INPUT_MESSAGES.roundCount);

  return Number(input);
};
