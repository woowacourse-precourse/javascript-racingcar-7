import { Console } from "@woowacourse/mission-utils";

class RacingGameView {
  static async getInput(input) {
    return await Console.readLineAsync(input);
  }

  static printStartMessage() {
    Console.print("\n실행 결과");
  }

  static printCarProgress(carName, progress) {
    Console.print(`${carName} : ${progress}`);
  }

  static printRoundEnd() {
    Console.print("");
  }
}

export default RacingGameView;
