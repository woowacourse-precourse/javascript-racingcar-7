import { OUTPUT } from '../constants/message.js';
import { Console } from '@woowacourse/mission-utils';

export default class ViewOut {
  static empty() {
    Console.print('');
  }

  static resultMessage() {
    Console.print(`${OUTPUT.RESULT}`);
  }

  static raceStatus = (cars) => {
    cars.forEach((car) => {
      const carName = car.getName();
      const carPoints = car.getPoints();
      Console.print(`${carName} : ${'-'.repeat(carPoints)}`);
    });

    this.empty();
  };

  static raceWinner = (winner) => {
    const winnerMessage = winner.map(car => car.getName()).join(', ');
    Console.print(`${OUTPUT.WINNER} : ${winnerMessage}`);
  };
}