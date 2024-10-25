import { Console } from '@woowacourse/mission-utils';

const getUserInput = async function getUserInputFunc(promptMessage) {
  const userInput = await Console.readLineAsync(`${promptMessage}\n`);
  return userInput;
};

const printCarsMoving = function printCarsMovingFunc(carName, movePosition) {
  Console.print(`${carName} : ${movePosition}`);
};

const printNewLine = function printNewLineFunc() {
  Console.print('');
};

const printPrevNewLine = function printPrevNewLineFunc(string) {
  Console.print(`\n${string}`);
};

export { getUserInput, printCarsMoving, printNewLine, printPrevNewLine };
