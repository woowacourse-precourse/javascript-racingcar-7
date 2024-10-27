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
}