import { Console } from '@woowacourse/mission-utils';
import { validateCarNames } from "./error.js";
import { validateCount } from "./error.js";

export async function getCarNames() {
  const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const carNames = input.split(",");
  validateCarNames(carNames);
  return carNames;
}

export async function getCount() {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const count = Number(input);
  validateCount(count);
  return count;
}

export function displayResults(results) {
  results.forEach(car => {
    Console.print(`${car.name} : ${car.position}`);
  });
  Console.print("");
}

