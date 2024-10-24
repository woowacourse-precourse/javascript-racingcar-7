import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static #POSITION_MARKER = "-";

  static printEmptyLine() {
    Console.print("");
  }

  static printCarStatus(car) {
    const formattedStatus = `${car.name} : ${this.#POSITION_MARKER.repeat(
      car.distance
    )}`;

    Console.print(formattedStatus);
  }
}

export default OutputView;
