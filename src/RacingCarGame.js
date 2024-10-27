import { Console, Random } from "@woowacourse/mission-utils";

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
    return isNaN(roundCount) || roundCount <= 0;
  }

  async start() {
    const carNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${RacingCarGame.CAR_NAME_SEPARATOR}) 기준으로 구분)\n`
    );
    const carNameList = carNames.split(RacingCarGame.CAR_NAME_SEPARATOR);

    carNameList.forEach((carName) => {
      if (!this.validateCarName(carName)) {
        throw new Error("[ERROR] 유효하지 않은 자동차 이름이 입력되었습니다.");
      }
    });

    const roundCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );

    if (this.validateRoundCount(roundCount)) {
      throw new Error("[ERROR] 유효하지 않은 시도할 횟수가 입력되었습니다.");
    }

    Console.print("\n실행 결과");

    const pointsMap = new Map();

    carNameList.forEach((carName) => {
      pointsMap.set(carName, 0);
    });

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

    const winnerCarNameList = [];
    let maxPoint = 0;

    for (const point of pointsMap.values()) {
      maxPoint = Math.max(maxPoint, point);
    }

    for (const [carName, point] of pointsMap) {
      if (maxPoint === point) {
        winnerCarNameList.push(carName);
      }
    }

    Console.print(`최종 우승자 : ${winnerCarNameList.join(", ")}`);
  }
}

export default RacingCarGame;
