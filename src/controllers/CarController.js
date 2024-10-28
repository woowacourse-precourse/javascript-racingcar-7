import { Console } from '@woowacourse/mission-utils';
import validateCarNames from '../validators/CarNameValidator.js';

export function handleCarNamesInput(input) {
  try {
    const carNames = validateCarNames(input);
    Console.print(`입력된 자동차 이름: ${carNames.join(', ')}`);
  } catch (error) {
    Console.print(error.message);
  }
}

export function promptCarNames() {
  Console.readLine(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    handleCarNamesInput,
  );
}
