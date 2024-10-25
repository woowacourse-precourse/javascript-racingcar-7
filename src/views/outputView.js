import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGameStart() {
    Console.print('\n실행 결과');
  },

  formatCarStatus(car) {
    const position = '-'.repeat(car.getPosition());
    return `${car.getName()} : ${position}`;
  },

  printRoundStatus(cars) {
    cars.forEach((car) => {
      Console.print(this.formatCarStatus(car));
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

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  },
};

export default OutputView;
