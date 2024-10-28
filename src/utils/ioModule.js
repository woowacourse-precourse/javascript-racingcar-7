import { Console } from '@woowacourse/mission-utils';

const getUserInput = async function getUserInputFunc(promptMessage) {
  const userInput = await Console.readLineAsync(`${promptMessage}\n`);
  return userInput;
};

const printKeyValueFormat = function printKeyValue(key, value) {
  Console.print(`${key} : ${value}`);
};

const printNewLine = function printNewLineFunc() {
  Console.print('');
};

const printPrevNewLine = function printPrevNewLineFunc(string) {
  Console.print(`\n${string}`);
};

export { getUserInput, printKeyValueFormat, printNewLine, printPrevNewLine };
