import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Message.js';

export const StartMessage = () => {
  Console.print(MESSAGES.INFO.START);
};

export const InputCarName = () =>
  Console.readLineAsync(MESSAGES.INFO.CAR_NAME_INPUT);

export const InputTryNumber = () =>
  Console.readLineAsync(MESSAGES.INFO.TRY_NUMBER_INPUT);

export const RoundResultMessage = (carName, AdvanceSymbol) => {
  Console.print(`${carName} : ${AdvanceSymbol}`);
};

export const GameWinnerMessage = (name) => {
  Console.print(MESSAGES.RESULT.WINNER + name);
};
