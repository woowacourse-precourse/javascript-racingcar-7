import { Console } from "@woowacourse/mission-utils";
import RACING_VARIABLES from "../constants/RacingVariables";

class UserInput{

    async getUserInputCars(){
  
      try {
          const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_PROMPT);
          return userInput;
      } catch (error) {
          Console.print('[ERROR]: 경주할 자동차를 입력을 받는 중 문제가 발생했습니다.');
          return null;
      }
    }
  
    async getUserInputCount(){
      try {
        const userInput = await Console.readLineAsync(RACING_VARIABLES.INPUT_COUNT_PROMPT);
        return Number(userInput);
      } catch (error) {
        Console.print('[ERROR]: 횟수를 입력을 받는 중 문제가 발생했습니다.');
        return null;
      }
    }
  }

  export default UserInput;