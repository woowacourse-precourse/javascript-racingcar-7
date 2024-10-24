import { Console } from '@woowacourse/mission-utils';
import { FINER_WINNER } from '../constant/message.js';

export const printWinner = (nameArray) => {
  Console.print(
    FINER_WINNER + nameArray.reduce((acc, current) => acc + ', ' + current),
  );
};
