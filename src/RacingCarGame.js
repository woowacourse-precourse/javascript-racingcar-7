import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/errorMessages.js";

class RacingCarGame {
  static CAR_NAME_SEPARATOR = ",";

  static MAX_CAR_NAME_LENGTH = 5;

  static MIN_CAR_NAME_LENGTH = 1;

  static MIN_SCORE_TO_MOVE = 4;

  validateCarName(carName) {
    return (
      carName.length >= RacingCarGame.MIN_CAR_NAME_LENGTH &&
      carName.length <= RacingCarGame.MAX_CAR_NAME_LENGTH
    );
  }

  validateRoundCount(roundCount) {
    return (
      !isNaN(roundCount) &&
      Number.isInteger(Number(roundCount)) &&
      Number(roundCount) > 0
    );
  }

  async start() {
    const carNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${RacingCarGame.CAR_NAME_SEPARATOR}) 기준으로 구분)\n`
    );

    if (carNames === "") {
      throw new Error(ERROR_MESSAGES.emptyCarNames);
    }

    const carNameList = carNames.split(RacingCarGame.CAR_NAME_SEPARATOR);
    const isValidCarNameList = carNameList.every(this.validateCarName);

    if (!isValidCarNameList) {
      throw new Error(ERROR_MESSAGES.invalidCarName);
    }

    const roundCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );

    if (!this.validateRoundCount(roundCount)) {
      throw new Error(ERROR_MESSAGES.invalidRoundCount);
    }

    Console.print("\n실행 결과");

    const pointsMap = new Map(carNameList.map((carName) => [carName, 0]));

    for (let round = 0; round < roundCount; round += 1) {
      for (const carName of carNameList) {
        const score = Random.pickNumberInRange(0, 9);

        if (score >= RacingCarGame.MIN_SCORE_TO_MOVE) {
          pointsMap.set(carName, pointsMap.get(carName) + 1);
        }

        Console.print(`${carName} : ${"-".repeat(pointsMap.get(carName))}`);
      }

      Console.print("\n");
    }

    const maxPoint = Math.max(...pointsMap.values());
    const winnerCarNameList = carNameList.filter(
      (carName) => pointsMap.get(carName) === maxPoint
    );

    Console.print(`최종 우승자 : ${winnerCarNameList.join(", ")}`);
  }
}

export default RacingCarGame;
