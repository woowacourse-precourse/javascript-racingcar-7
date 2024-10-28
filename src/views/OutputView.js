import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('');
  }

  static printWinners(winners) {
    const winnerNames = winners.map((winner) => winner.getName()).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default OutputView;
