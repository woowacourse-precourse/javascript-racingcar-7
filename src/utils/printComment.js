import { Console } from '@woowacourse/mission-utils';
import { OutputComment } from '../constants/displayConstant.js';

export const printCurrentStatus = (carList) => {
  carList.forEach(({ name, position }) => {
    Console.print(`${name} : ${OutputComment.RACING_MARK.repeat(position)}`);
  });
};

export const printStatusTitle = () => {
  Console.print(OutputComment.STATUS_TITLE);
};

export const printTurnSeperator = () => {
  Console.print(OutputComment.TURN_SEPERATOR);
};

export const printWinner = (winner) => {
  Console.print(`${OutputComment.WINNER_TITLE} : ${winner}`);
};
