import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/message.js';

export default class ViewOut {
  static showResultMessage() {
    Console.print(`${OUTPUT.RESULT}`);
  }

  static showRaceStatus = (cars) => {
    cars.forEach((car) => {
      const carName = car.getName();
      const carPoints = car.getPoints();
      Console.print(`${carName} : ${'-'.repeat(carPoints)}`);
    });

    Console.print('');
  };
}