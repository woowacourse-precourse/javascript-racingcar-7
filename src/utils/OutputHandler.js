import { Console } from '@woowacourse/mission-utils';

class OutputHandler {
  static printMessage(message) {
    Console.print(message);
  }

  static printRaceStatus(cars) {
    cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print('');
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default OutputHandler;
