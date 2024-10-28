import { MissionUtils } from "@woowacourse/mission-utils";
const SEPARATOR = ",";
const MAXIMUM_CARNAME_THRESHOLD = 5;
const MINIMUM_MOVE_THRESHOLD = 4;
const ERROR_NO_SEPARATOR =
  "[ERROR] 쉼표(,) 구분자가 없습니다. 프로그램을 종료합니다.";
const ERROR_LONG_CARNAME =
  "[ERROR] 구분자는 있으나, 자동차 이름은 5자 이하만 가능합니다. 프로그램을 종료합니다.";
const ERROR_INVALID_CARNAME =
  "[ERROR] 자동차 이름은 문자만 가능합니다. 프로그램을 종료합니다.";
const ERROR_NOT_NUMBER =
  "[ERROR] 숫자가 아닌 값을 입력하셨습니다. 프로그램을 종료합니다.";
const ERROR_INVALID_ROUND_COUNT =
  "[ERROR] 시도 횟수는 1회 이상이어야 합니다. 프로그램을 종료합니다.";

class App {
  async run() {
    let carNamesString = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로)\n"
    );
    if (!carNamesString.includes(SEPARATOR)) {
      throw new Error(ERROR_NO_SEPARATOR);
    }
    let carNames = carNamesString.split(SEPARATOR);

    if (!this.hasLongCarName(carNames)) {
      throw new Error(ERROR_LONG_CARNAME);
    }

    if (this.hasCarNameStartingWithNumber(carNames)) {
      throw new Error(ERROR_INVALID_CARNAME);
    }

    let roundCountString = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (isNaN(roundCountString)) {
      throw new Error(ERROR_NOT_NUMBER);
    }

    let roundCount = Number(roundCountString);
    if (roundCount <= 0) {
      throw new Error(ERROR_INVALID_ROUND_COUNT);
    }

    const carsMap = this.createCarPositionMap(carNames);

    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < roundCount; i++) {
      this.moveOneStepRandomly(carsMap);

      this.printOneRound(carsMap);

      MissionUtils.Console.print("");
    }

    this.printWinners(this.getWinners(carsMap)); // 우승자 가려내기
    // 우승자 출력하기
  }

  getWinners(carsMap) {
    // 최종 우승자 계산 함수
    const winners = []; // 공동우승자를 저장할 배열
    let maxPosition = -1; // ?? 얘는 뭐지? 꼭 필요한가??? (보류)

    for (const car of carsMap) {
      if (car.position > maxPosition) {
        maxPosition = car.position; // 가장 고점인 애가 나타나면 maxPosition을 갱신함
        winners.length = 0; // 새로운 우승자를 발견하면 기존 우승자 배열을 초기화
        winners.push(car); // 새로운 우승자 정보를 차례대로 배열에 집어넣음
      } else if (car.position === maxPosition) winners.push(car); // 공동우승자 추가
    }
    return winners;
  }

  printWinners(winners) {
    if (winners.length === 1)
      MissionUtils.Console.print(`최종 우승자 : ${winners[0].name}`);
    else {
      const winnerNames = winners.map((winner) => winner.name).join(", ");
      MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
    }
  }

  printOneRound(carsMap) {
    for (const car of carsMap) {
      const positionOutput = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionOutput}`);
    }
  }

  moveOneStepRandomly(carsMap) {
    for (const car of carsMap) {
      const shouldMove =
        MissionUtils.Random.pickNumberInRange(0, 9) >= MINIMUM_MOVE_THRESHOLD;
      if (shouldMove) car.position++;
    }
  }

  createCarPositionMap(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  hasLongCarName(carNames) {
    return carNames.every((name) => name.length <= MAXIMUM_CARNAME_THRESHOLD);
  }

  hasCarNameStartingWithNumber(carNames) {
    return carNames.some((name) => /^\d/.test(name));
  }
}

export default App;
