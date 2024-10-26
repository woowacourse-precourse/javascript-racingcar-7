import { Console } from '@woowacourse/mission-utils';
import { validateCarNames } from "./error.js";
import { validateCount } from "./error.js";

import { MESSAGE } from "./message.js";

export async function getCarNames() {
  const input = await Console.readLineAsync(MESSAGE.ASK_CARNAMES+"\n");
  const carNames = input.split(",");
  validateCarNames(carNames);
  return carNames;
}

export async function getCount() {
  const input = await Console.readLineAsync(MESSAGE.ASK_COUNT+"\n");
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

