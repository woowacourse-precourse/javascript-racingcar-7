import { MissionUtils } from "@woowacourse/mission-utils";
const SEPARATOR = ",";
const MAXIMUM_CARNAME_THRESHOLD = 5;
const MINIMUM_MOVE_THRESHOLD = 4;

const ERROR_MESSAGE_NO_SEPARATOR =
  "[ERROR] 쉼표(,) 구분자가 없습니다. 프로그램을 종료합니다.";
const ERROR_MESSAGE_LONG_CARNAME =
  "[ERROR] 구분자는 있으나, 자동차 이름은 5자 이하만 가능합니다. 프로그램을 종료합니다.";
const ERROR_MESSAGE_INVALID_CARNAME =
  "[ERROR] 자동차 이름은 문자만 가능합니다. 프로그램을 종료합니다.";
const ERROR_MESSAGE_NOT_NUMBER =
  "[ERROR] 숫자가 아닌 값을 입력하셨습니다. 프로그램을 종료합니다.";
const ERROR_MESSAGE_INVALID_ROUND_COUNT =
  "[ERROR] 시도 횟수는 1회 이상이어야 합니다. 프로그램을 종료합니다.";

const GUIDE_MESSAGE_ASKING_CAR_NAMES =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로)\n";
const GUIDE_MESSAGE_ASKING_ROUND_COUNT = "시도할 횟수는 몇 회인가요?\n";
const GUIDE_MESSAGE_RESULT = "\n실행 결과";

class App {
  async run() {
    let carNamesString = await MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_ASKING_CAR_NAMES
    );

    if (!carNamesString.includes(SEPARATOR)) {
      throw new Error(ERROR_MESSAGE_NO_SEPARATOR);
    }

    let carNames = carNamesString.split(SEPARATOR);
    if (this.hasLongCarName(carNames)) {
      throw new Error(ERROR_MESSAGE_LONG_CARNAME);
    }
    if (this.hasCarNameStartingWithNumber(carNames)) {
      throw new Error(ERROR_MESSAGE_INVALID_CARNAME);
    }

    let roundCountString = await MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_ASKING_ROUND_COUNT
    );
    if (isNaN(roundCountString)) {
      throw new Error(ERROR_MESSAGE_NOT_NUMBER);
    }
    let roundCount = Number(roundCountString);
    if (roundCount <= 0) {
      throw new Error(ERROR_MESSAGE_INVALID_ROUND_COUNT);
    }

    const cars = this.createCarsWithPosition(carNames);

    MissionUtils.Console.print(GUIDE_MESSAGE_RESULT);
    for (let i = 0; i < roundCount; i++) {
      for (const car of cars) {
        this.moveOneStepRandomly(
          car,
          MissionUtils.Random.pickNumberInRange(0, 9)
        );
      }
      this.printOneRound(cars);
    }
    this.printWinners(this.getWinners(cars));
  }

  getWinners(cars) {
    const winners = [];
    let maxPosition = -1;

    for (const car of cars) {
      if (car.position > maxPosition) {
        maxPosition = car.position;
        winners.length = 0;
        winners.push(car);
      } else if (car.position === maxPosition) winners.push(car);
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

  printOneRound(cars) {
    for (const car of cars) {
      const positionOutput = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionOutput}`);
    }
    MissionUtils.Console.print("");
  }

  moveOneStepRandomly(car, random_number) {
    const shouldMove = random_number >= MINIMUM_MOVE_THRESHOLD;
    if (shouldMove) car.position++;
  }

  createCarsWithPosition(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  hasLongCarName(carNames) {
    return carNames.some((name) => name.length > MAXIMUM_CARNAME_THRESHOLD);
  }

  hasCarNameStartingWithNumber(carNames) {
    return carNames.some((name) => /^\d/.test(name));
  }
}

export default App;
