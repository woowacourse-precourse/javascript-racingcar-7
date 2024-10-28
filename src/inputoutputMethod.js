import { MissionUtils } from '@woowacourse/mission-utils';
import IOMESSAGE from './ioMessage.js';

const ioMethod = {
  inputCarName: async () => {
    const carName = await MissionUtils.Console.readLineAsync(
      `${IOMESSAGE.INPUTCARNAMEMESSAGE}${IOMESSAGE.NEWLINE}`,
    );
    return carName;
  },

  inputTryNum: async () => {
    const tryNum = await MissionUtils.Console.readLineAsync(
      `${IOMESSAGE.TRYNUMBERMESSAGE}${IOMESSAGE.NEWLINE}`,
    );
    return tryNum;
  },

  printProgressResult: () => {
    MissionUtils.Console.print(
      `${IOMESSAGE.NEWLINE}${IOMESSAGE.PROGRESSRESULT}`,
    );
  },

  printGameProgress: (gameBoard) => {
    for (const [key, value] of Object.entries(gameBoard)) {
      MissionUtils.Console.print(`${key} : ${value}`);
    }
    MissionUtils.Console.print(`${IOMESSAGE.NEWLINE}`);
  },

  printFirstPlayer: (arr) => {
    MissionUtils.Console.print(
      `${IOMESSAGE.FIRSTPLAYERMESSAGE}${arr.join(', ')}`,
    );
  },
};

export default ioMethod;
