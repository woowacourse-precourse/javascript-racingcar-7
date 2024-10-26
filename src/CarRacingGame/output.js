import { Console } from '@woowacourse/mission-utils';

export function printExecutionResult(carList) {
  Console.print(carList.map((car) => `${car.name} : ${'-'.repeat(car.number)}`).join('\n'));
  Console.print('');
}
