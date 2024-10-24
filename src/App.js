import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const racingCarNames = await this.readRacingCarNames();
    const attemptCount = await this.readAttemptCount();

    this.startRacingGame(racingCarNames, attemptCount);
  }

  async readRacingCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input;
  }

  async readAttemptCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return input;
  }

  startRacingGame(racingCarNames, attemptCount) {
    this.validateAttempCount(attemptCount);

    const racingCarNamesArray = this.parseRacingCarNames(racingCarNames);

    this.validateRacingCarNames(racingCarNamesArray);

    const moveCntPerCar = this.initMoveCntPerCar(racingCarNamesArray);

    Console.print("\n실행 결과");
    this.race(moveCntPerCar, racingCarNamesArray, attemptCount);

    this.printWinner(moveCntPerCar);
  }

  parseRacingCarNames(racingCarNames) {
    return racingCarNames.split(",");
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  isCarMove(randomNumber) {
    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }

  printAttemptResult(moveCntPerCar) {
    const lines = [];

    Object.entries(moveCntPerCar).forEach(([car, moveCnt]) => {
      lines.push(`${car} : ${"-".repeat(moveCnt)}`);
    });

    Console.print(lines.join("\n"));
  }

  printWinner(moveCntPerCar) {
    const maxMoveCnt = Math.max(...Object.values(moveCntPerCar));
    const winners = Object.entries(moveCntPerCar)
      .filter(([_, moveCnt]) => moveCnt === maxMoveCnt)
      .map(([car]) => car);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  printError(message) {
    throw new Error(`[ERROR] ${message}`);
  }

  validateAttempCount(attemptCount) {
    if (+attemptCount === 0 || !Number.isInteger(+attemptCount)) {
      this.printError("시도 횟수는 1 이상의 정수만 가능합니다.");
    }
  }

  validateRacingCarNames(racingCarNamesArray) {
    racingCarNamesArray.forEach((carName) => {
      this.validateRacingCarName(carName);
    });
  }

  validateRacingCarName(carName) {
    if (carName.length > 5) {
      this.printError("자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  race(moveCntPerCar, racingCarNamesArray, attemptCount) {
    for (let i = 0; i < attemptCount; i += 1) {
      this.moveCars(moveCntPerCar, racingCarNamesArray);
      this.printAttemptResult(moveCntPerCar);
      Console.print("\n");
    }
  }

  moveCars(moveCntPerCar, racingCarNamesArray) {
    racingCarNamesArray.forEach((carName) => {
      this.moveCar(moveCntPerCar, carName);
    });
  }

  moveCar(moveCntPerCar, carName) {
    const randomNumber = this.getRandomNumber();
    if (this.isCarMove(randomNumber)) {
      moveCntPerCar[carName] += 1;
    }
  }

  initMoveCntPerCar(racingCarNamesArray) {
    const moveCntPerCar = {};

    racingCarNamesArray.forEach((car) => {
      moveCntPerCar[car] = 0;
    });

    return moveCntPerCar;
  }
}

export default App;
