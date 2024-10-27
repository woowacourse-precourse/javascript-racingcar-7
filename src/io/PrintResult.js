import { Console } from '@woowacourse/mission-utils';

class PrintResult {
  static print(cars) {
    Console.print(cars.map((car) => `${car.name}: ${'-'.repeat(car.position)}`).join('\n'));
    Console.print('');
  }
  static printWinner(cars) {
    const winners = cars.filter((car) => car.position === Math.max(...cars.map((car) => car.position)));
    Console.print(`최종 우승자 : ${winners.map((winner) => winner.name).join(', ')}`);
  }
}

export default PrintResult;