import { Console } from '@woowacourse/mission-utils';
import { DASH, OUTPUT } from '../constant.js';

export class OutputView {
  advancedResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${DASH.repeat(car.advancedCount)}`);
    });
  }

  emptyLine() {
    Console.print('');
  }

  string(string) {
    Console.print(string);
  }

  winners(winners) {
    Console.print(`${OUTPUT.WINNERS}${winners.join(', ')}`);
  }
}
