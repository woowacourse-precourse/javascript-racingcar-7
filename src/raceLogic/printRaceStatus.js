import { Console } from '@woowacourse/mission-utils';

export function printRaceStatus(carName, moveCount) {
  Console.print(`${carName} : ${'-'.repeat(moveCount)}`);
}