import { Console } from '@woowacourse/mission-utils';
import Car from '../Car.js';
import { errorMessages } from '../constant.js';
import Validator from '../Validator.js';

const validator = new Validator();

export async function carInput() {
  const input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const result = validator.validCarInput(input);
  return result;
}

export async function countInput() {
  const input = await Console.readLineAsync('시도할 횟수는 몇번인가요?\n');
  const result = parseInt(validator.validCountInput(input));
  return result;
}
