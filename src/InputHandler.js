import { Console } from "@woowacourse/mission-utils";

class InputHandler {
  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carNamesInput;
  }

  async getAttemptCount() {
    const attemptCountInput = await Console.readLineAsync(
      "시도할 횟수를 입력하세요\n"
    );
    return attemptCountInput;
  }
}

export default InputHandler;
