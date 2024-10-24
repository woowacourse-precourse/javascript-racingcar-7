import { Console } from '@woowacourse/mission-utils';
import { FINER_WINNER } from '../constant/message.js';

export const printWinner = (names) => {
  Console.print(
    FINER_WINNER + names.reduce((acc, current) => acc + ', ' + current),
  );
};
