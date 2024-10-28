import { Console } from '@woowacourse/mission-utils';
import { IOMESSAGE } from '../constants/index.js';

const ioMethod = {
  inputCarName: async () => {
    const carName = await Console.readLineAsync(
      `${IOMESSAGE.INPUTCARNAMEMESSAGE}${IOMESSAGE.NEWLINE}`,
    );
    return carName;
  },

  inputTryNum: async () => {
    const tryNum = await Console.readLineAsync(
      `${IOMESSAGE.TRYNUMBERMESSAGE}${IOMESSAGE.NEWLINE}`,
    );
    return tryNum;
  },

  printProgressResult: () => {
    Console.print(`${IOMESSAGE.NEWLINE}${IOMESSAGE.PROGRESSRESULT}`);
  },

  printGameProgress: (gameBoard) => {
    for (const [key, value] of Object.entries(gameBoard)) {
      Console.print(`${key} : ${value}`);
    }
    Console.print(`${IOMESSAGE.NEWLINE}`);
  },

  printFirstPlayer: (arr) => {
    Console.print(`${IOMESSAGE.FIRSTPLAYERMESSAGE}${arr.join(', ')}`);
  },
};

export default ioMethod;
