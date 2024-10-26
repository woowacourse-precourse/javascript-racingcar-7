import { Console } from "@woowacourse/mission-utils";
import RACING_VARIABLES from "../constants/RacingVariables.js";

class UserInput {

  async getUserInputCars() {

    try {
      const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_PROMPT);
      return userInput;
    } catch {
      throw new Error('[ERROR]: 경주할 자동차를 입력을 받는 중 문제가 발생했습니다.');

    }
  }

  async getUserInputCount() {
    try {
      const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_COUNT_PROMPT);
      return Number(userInput);
    } catch {
      throw new Error('[ERROR]: 횟수를 입력을 받는 중 문제가 발생했습니다.');

    }
  }
}

export default UserInput;