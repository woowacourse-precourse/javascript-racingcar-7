import { Console } from '@woowacourse/mission-utils';

class RacingView {
  static printRaceStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${car.getPositionString()}`);
    });
    Console.print('');
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  static printError(message) {
    Console.print(`[ERROR] ${message}`);
  }
}

export default RacingView;
