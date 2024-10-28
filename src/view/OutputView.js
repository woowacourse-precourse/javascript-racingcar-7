import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/message.js';

const OutputView = {
  printStartRaceHeader() {
    Console.print(OUTPUT_MESSAGE.RACE_RESULT);
  },

  printCarPositions(cars) {
    cars.forEach((car) => {
      Console.print(
        `${car.getName()} : ${OUTPUT_MESSAGE.POSITION_SYMBOL.repeat(
          car.getPosition()
        )}`
      );
    });
    Console.print('');
  },

  printRaceWinner(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNER}${winners.join(', ')}`);
  },
};

export default OutputView;
