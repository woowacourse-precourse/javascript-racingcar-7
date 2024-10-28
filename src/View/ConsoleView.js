import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
  static async readCarNames() {
    return await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  }

  static async readTryNumber() {
    return await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  static printRaceResult(carList) {
    carList.getCars().forEach(car => {
      Console.print(`${car.name} : ${"-".repeat(car.getDistance())}`);
    });
    Console.print("\n");
  }

  static printWinners(winners) {
    Console.print("최종 우승자 : " + winners.join(", "));
  }

  static printMessage(message) {
    Console.print(message);
  }

  static printError(message) {
    Console.print(message);
  }
}

export default ConsoleView;
