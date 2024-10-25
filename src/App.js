import Input from "./Input.js";
import Validator from "./Validator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Input.getUserInput();
    const splitedUserInput = Input.splitUserInput(userInput);
    const tryCount = await Input.getTryCount();

    if (
      Validator.validateCarName(splitedUserInput) &&
      Validator.validateTryCount(tryCount)
    ) {
      Console.print("입력 값 검증 성공");
    } else {
      Console.print("입력 값 검증 실패");
    }
  }
}

export default App;
