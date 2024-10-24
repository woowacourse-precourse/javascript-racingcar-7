import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE, ERROR } from '../constants/index.js';
import { ValidationError } from '../Error/ValidationError.js';

function validateInput(carString, count) {
  if (!carString) {
    throw new ValidationError(ERROR.EMPTY_CAR_STRING_MESSAGE);
  }
  if (Number.isNaN(parseInt(count, 10))) {
    throw new ValidationError(ERROR.EMPTY_COUNT_MESSAGE);
  }
  if (count <= 0) {
    throw new ValidationError(ERROR.NONE_POSITIVE_COUNT_MESSAGE);
  }
}

async function getGameInput() {
  const carString = await Console.readLineAsync(IO_MESSAGE.FIRST_INPUT_MESSAGE);
  const count = await Console.readLineAsync(IO_MESSAGE.SECOND_INPUT_MESSAGE);
  validateInput(carString, count);
  return { carString, count };
}

function printGameResult(result) {
  Console.print(IO_MESSAGE.OUTPUT_MESSAGE + result.join(IO_MESSAGE.SEPERATOR));
}

export { getGameInput, printGameResult };
