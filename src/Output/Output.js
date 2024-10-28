import { Console } from "@woowacourse/mission-utils";
import { GIDE_MESSAGE } from "../Constants/constant.js";

/**
 * @classdesc 레이스 카의 상태와 결과를 출력하는 클래스
 * - `currRaceState` : 현재 레이스 카의 상태를 출력한다.
 * - `resultMessage` : 결과 메시지를 출력한다.
 * - `winner` : 우승자를 출력한다.
 */
class Output {
  static currRaceState(raceCarList) {
    Console.print(
      raceCarList
        .map((car) => `${car.name} : ${"-".repeat(car.position)}`)
        .join("\n")
    );
    Console.print("\n");
  }

  static resultMessage(resultMessage) {
    Console.print(resultMessage);
  }

  static winner(winnerCars) {
    let resultMessage = `${GIDE_MESSAGE.winner} `;
    const carNames = winnerCars.map((car) => car.name);
    if (carNames.length > 1) {
      resultMessage +=
        carNames.slice(0, -1).join(", ") + `, ${carNames[carNames.length - 1]}`;
    } else if (carNames.length === 1) {
      resultMessage += carNames[0];
    }
    this.resultMessage(resultMessage);
  }
}

export default Output;
