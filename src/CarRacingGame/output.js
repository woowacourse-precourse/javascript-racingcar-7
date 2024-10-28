import { Console } from '@woowacourse/mission-utils';

export function printExecutionResult(carList) {
  const executionResult = carList
    .map((car) => `${car.name} : ${'-'.repeat(car.number)}`)
    .join('\n');
  Console.print(`${executionResult}\n`);
}

export function printWinner(carList, maxMoveNum) {
  const finalWinner = carList
    .filter((car) => car.number === maxMoveNum)
    .map((car) => car.name)
    .join(', ');

  Console.print(`\n최종 우승자 : ${finalWinner}`);
}
