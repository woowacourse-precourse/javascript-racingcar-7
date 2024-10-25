import { Console } from '@woowacourse/mission-utils';
import { FINER_WINNER } from '../constant/raceMessage.js';

export const printWinner = (nameArray) => {
  Console.print(
    FINER_WINNER + nameArray.reduce((acc, current) => acc + ', ' + current),
  );
};
