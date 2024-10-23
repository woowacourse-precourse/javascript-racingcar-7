import { Console } from '@woowacourse/mission-utils';
import Car from '../Car.js';
import { errorMessages } from '../constant.js';

export async function carInput() {
  const input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  return input.split(',').map((name) => new Car(name));
}

export async function countInput() {
  const input = await Console.readLineAsync('시도할 횟수는 몇번인가요?\n');

  if (!input) {
    throw new Error(`${errorMessages.prefix} ${errorMessages.invalidCount}`);
  }

  return parseInt(input);
}
