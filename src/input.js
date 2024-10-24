import { Console } from '@woowacourse/mission-utils';
import { validateCars, validateCount } from './validate.js';

export async function getInputCars() {
  const cars = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  );

  return validateCars(cars);
}

export async function getInputCount() {
  const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

  return validateCount(count);
}

export async function input() {
  const cars = await getInputCars();
  const count = await getInputCount();

  return { cars, count };
}
