import { Console } from '@woowacourse/mission-utils';

export function displayResults(cars) {
  Console.print('실행 결과');
  cars.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  });
  Console.print('\n');
}

export function displayWinners(winners) {
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
