import { Console } from "@woowacourse/mission-utils";

class UserInput {
  static MESSAGES = {
    carNamePrompt:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    attemptPrompt: "시도할 횟수는 몇 회인가요?\n",
  };

  async askCarNames() {
    const carNames = await Console.readLineAsync(
      UserInput.MESSAGES.carNamePrompt
    );
    return carNames.split(",");
  }
  async askAttempts() {
    return await Console.readLineAsync(UserInput.MESSAGES.attemptPrompt);
  }
}

export default UserInput;
