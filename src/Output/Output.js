import { Console } from "@woowacourse/mission-utils";
import { GIDE_MESSAGE } from "../Constants/constant.js";

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
