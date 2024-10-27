import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants.js';

class OutputView {
  static printExecutionResult() {
    Console.print(MESSAGES.EXECUTION_RESULT);
  }

  static printCarPositions(cars) {
    cars.forEach((car) => {
      const position = '-'.repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print('');
  }

  static printWinners(winners) {
    Console.print(MESSAGES.FINAL_WINNER(winners));
  }

  static printErrorMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
