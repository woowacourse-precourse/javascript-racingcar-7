import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_ATTEMPT_COUNT,
  INPUT_CAR_NAME,
  WINNER,
} from '../constants/consoleMessage.js';

class RaceView {
  async getCarNames() {
    const input = await Console.readLineAsync(INPUT_CAR_NAME);
    return input.split(',').map((name) => name.trim());
  }

  async getAttemptCount() {
    const input = await Console.readLineAsync(INPUT_ATTEMPT_COUNT);
    return input;
  }

  printRaceStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
    });
    Console.print(' ');
  }

  printWinner(winner) {
    Console.print(`${WINNER} ${winner.join(', ')}`);
  }
}
export default RaceView;
