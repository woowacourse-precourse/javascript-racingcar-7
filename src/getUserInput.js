import { Console } from "@woowacourse/mission-utils";

const getUserInput = async (text) => {
  const userInput = await Console.readLineAsync(text);

  return userInput;
}

export default getUserInput;