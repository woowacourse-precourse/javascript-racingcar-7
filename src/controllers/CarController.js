import { Console } from '@woowacourse/mission-utils';
import validateCarNames from '../validators/CarNameValidator.js';
import validateTryCount from '../validators/TryCountValidator.js';

export async function promptCarNames() {
  const input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const carNames = validateCarNames(input);
  Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
  return carNames;
}

export async function promptTryCount() {
  const input = await Console.readLineAsync('시도할 횟수를 입력하세요.\n');
  const tryCount = validateTryCount(input);
  Console.print(`입력된 시도 횟수: ${tryCount}`);
  return tryCount;
}
