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

  static printWinnerList(winnerList) {
    const formattedWinnerList = `최종 우승자 : ${winnerList.join(", ")}`;

    Console.print(formattedWinnerList);
  }
}

export default OutputView;
