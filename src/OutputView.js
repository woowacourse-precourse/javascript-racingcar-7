import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printPositions(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
    });
    Console.print('\n');
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
