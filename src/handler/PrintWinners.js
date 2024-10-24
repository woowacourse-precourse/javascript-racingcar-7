import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_WINNER_MESSAGE } from "../constants/Messages.js";

export class PrintWinners {
  printWinners(cars) {
    const winnerNamesArr = this.#getWinners(cars);
    const winnerNames = winnerNamesArr.join(', ');
    MissionUtils.Console.print(PRINT_WINNER_MESSAGE + winnerNames);
  }

  #getWinners(cars) {
    const maxLength = cars.reduce((max, car) => Math.max(max, car.getLength()), 0);
    const winnerCars = cars.filter((car) => car.getLength() === maxLength);
    return winnerCars.map((car) => car.getName());
  }
}
