import { Console } from '@woowacourse/mission-utils';

class CarRacingOutputWriter {
  static printStartMessage() {
    Console.print('\n실행결과');
  }

  static printRoundResults(cars) {
    let results = '';

    cars.forEach((car) => {
      results += `${car.name} : ${'-'.repeat(car.distance)}\n`;
    });

    Console.print(results);
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default CarRacingOutputWriter;
