import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MSG } from '../../constants/promptMessage.js';

export const printRaceStatus = (cars, carPositions) => {
  for (let i = 0; i < cars.length; i++) {
    Console.print(`${cars[i]} : ${'-'.repeat(carPositions[i])}`);
  }
  Console.print('');
};

export const printWinner = (cars, winnerIndices) => {
  Console.print(
    `${PROMPT_MSG.WINNER} : ${cars.filter((_, idx) => winnerIndices.includes(idx)).join(',')}`,
  );
};
