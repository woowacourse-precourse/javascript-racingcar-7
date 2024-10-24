import { Console } from '@woowacourse/mission-utils';

const getUserInput = async function getUserInputFunc(promptMessage) {
  const userInput = await Console.readLineAsync(`${promptMessage} : `);
  return userInput;
};

export default getUserInput;
