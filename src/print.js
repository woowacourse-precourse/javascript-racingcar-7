import { Console } from '@woowacourse/mission-utils';

function printResult(racingObject) {
  for (let key in racingObject) {
    Console.print(`${key} : ` + '-'.repeat(racingObject[key]));
  }
  Console.print('\n');
}

function printWinner(winner) {
  const result = ArrayToString(winner);
  Console.print(`최종 우승자 : ${result}`);
}

function ArrayToString(array) {
  return array.map((winner) => winner).join(', ');
}

export { printWinner, printResult };
