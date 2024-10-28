import { Console } from '@woowacourse/mission-utils';
import validateCarNames from '../validators/CarNameValidator.js';
import validateTryCount from '../validators/TryCountValidator.js';
import readLineAsync from '../utils/readLineAsync.js';
export async function promptCarNames() {
  try {
    const input = await readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carNames = validateCarNames(input);
    Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
  } catch (error) {
    Console.print(error.message);
  }
}

export async function promptTryCount() {
  try {
    const input = await readLineAsync('시도할 횟수를 입력하세요.\n');
    const tryCount = validateTryCount(input);
    Console.print(`입력된 시도 횟수: ${tryCount}`);
  } catch (error) {
    Console.print(error.message);
  }
}
