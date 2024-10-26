import { Console } from '@woowacourse/mission-utils';
import { IOMESSAGE } from '../constants/index.js';

export const inputCarName = async () => {
  const carName = await Console.readLineAsync(
    `${IOMESSAGE.INPUTCARNAMEMESSAGE}${IOMESSAGE.NEWLINE}`,
  );
  return carName;
};

export const inputTryNum = async () => {
  const tryNum = await Console.readLineAsync(
    `${IOMESSAGE.TRYNUMBERMESSAGE}${IOMESSAGE.NEWLINE}`,
  );
  return tryNum;
};

export const printProgressResult = () => {
  Console.print(`${IOMESSAGE.NEWLINE}${IOMESSAGE.PROGRESSRESULT}`);
};

export const printGameProgress = (gameBoard) => {
  for (const [key, value] of Object.entries(gameBoard)) {
    Console.print(`${key} : ${value}`);
  }
};

export const printNewLine = () => {
  Console.print(`${IOMESSAGE.NEWLINE}`);
};

export const printFirstPlayer = (arr) => {
  Console.print(`${IOMESSAGE.FIRSTPLAYERMESSAGE}${arr.join(', ')}`);
};
