import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE } from '../constants';

async function getGameInput() {
  const cars = await Console.readLineAsync(IO_MESSAGE.FIRST_INPUT_MESSAGE);
  const count = await Console.readLineAsync(IO_MESSAGE.SECOND_INPUT_MESSAGE);
  return { cars, count };
}

function printGameResult(result) {
  Console.print(IO_MESSAGE.OUTPUT_MESSAGE + result.join(IO_MESSAGE.SEPERATOR));
}

export { getGameInput, printGameResult };
