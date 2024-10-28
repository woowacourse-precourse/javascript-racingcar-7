import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Message/Message.js";

class ConsoleView {
  static async readCarNames() {
    return await Console.readLineAsync(MESSAGE.CAR_NAME_INPUT);
  }

  static async readTryNumber() {
    return await Console.readLineAsync(MESSAGE.TRY_NUMBER_INPUT);
  }

  static printRaceResult(carList) {
    carList.getCars().forEach(car => {
      Console.print(`${car.name} : ${MESSAGE.FORWARD_CHAR.repeat(car.getDistance())}`);
    });
    Console.print("\n");
  }

  static printWinners(winners) {
    Console.print(MESSAGE.FINAL_WINNER + winners.join(", "));
  }

  static printMessage(message) {
    Console.print(message);
  }

  static printError(message) {
    Console.print(message);
  }
}

export default ConsoleView;
