import { Console } from '@woowacourse/mission-utils';

class CarRacingOutputWriter {
  printRoundResults(cars) {
    let results = '';

    cars.forEach((car) => {
      results += `${car.name} : ${car.distance}\n`;
    });

    Console.print(results);
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default CarRacingOutputWriter;
