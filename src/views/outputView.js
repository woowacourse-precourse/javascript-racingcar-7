import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGameStart() {
    Console.print('\n실행 결과');
  },

  printRoundStatus(cars) {
    cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print('');
  },

  formatWinners(winners) {
    return winners.map((car) => car.getName()).join(', ');
  },

  printWinners(winners) {
    const winnerText = this.formatWinners(winners);
    Console.print(`최종 우승자 : ${winnerText}`);
  },
};

export default OutputView;
