import { Console } from "@woowacourse/mission-utils";

class UserInput {
  static MESSAGES = {
    carNamePrompt: "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n",
  };

  async askCarNames() {
    const carNames = await Console.readLineAsync(
      UserInput.MESSAGES.carNamePrompt
    );
    return carNames.split(",");
  }
}

export default UserInput;
