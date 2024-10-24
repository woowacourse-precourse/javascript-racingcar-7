import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE } from '../constants/index.js';
import { ValidationError } from '../Error/ValidationError.js';

function validateInput(carString, count) {
  if (!carString) {
    throw new ValidationError('[ERROR] 자동차가 입력되지 않았습니다.');
  }
  if (Number.isNaN(parseInt(count, 10))) {
    throw new ValidationError('[ERROR] 숫자가 입력되지 않았습니다.');
  }
  if (count <= 0) {
    throw new ValidationError('[ERROR] 양수를 입력해야 합니다.');
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
