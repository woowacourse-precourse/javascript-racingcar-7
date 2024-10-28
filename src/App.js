import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  inputCars() {
    return MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  splitCars(input) {
    return input.split(",");
  }

  checkCarName(car) {
    if (!(car.length <= 5 && car.length > 0)) {
      throw new Error("[ERROR]");
    }

    if (car.includes(" ")) {
      throw new Error("[ERROR]");
    }
  }

  validateCarNames(cars) {
    for (let car of cars) {
      this.checkCarName(car);
    }
  }

  inputAttempts() {
    return MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  validateAttempts(input) {
    if (input <= 0) {
      throw new Error("[ERROR]");
    }
  }

  initializeCarsObject(cars) {
    const carsObject = {};
    for (let car of cars) {
      carsObject[car] = "";
    }
    return carsObject;
  }

  makeRandom() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  goForward() {
    const randomNum = this.makeRandom();

    if (randomNum >= 4) {
      return true;
    } else {
      return false;
    }
  }

  updateCarPosition(car, carObject) {
    if (this.goForward()) {
      carObject[car] += "-";
    }
  }

  game(cars, carObject) {
    const updatedCarObject = { ...carObject };
    for (let car of cars) {
      this.updateCarPosition(car, updatedCarObject);
    }
    return updatedCarObject;
  }

  printCarPositions(cars, carObject) {
    for (let car of cars) {
      MissionUtils.Console.print(`${car} : ${carObject[car]}`);
    }
    MissionUtils.Console.print("");
  }

  async playRace(carsList, attempt, carsObject) {
    for (let games = 0; games < attempt; games++) {
      const goAheadObject = await this.game(carsList, carsObject);
      carsObject = { ...goAheadObject };
      this.printCarPositions(carsList, goAheadObject);
    }
    return carsObject;
  }

  findMaxDist(carsObject) {
    return Math.max(...Object.values(carsObject).map((pos) => pos.length));
  }

  findWinner(cars, carsObject) {
    const maxDistance = this.findMaxDist(carsObject);
    return cars.filter((car) => carsObject[car].length === maxDistance);
  }

  printWinner(winnerList) {
    const winner = winnerList.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }

  async run() {
    try {
      const carsName = await this.inputCars();
      const carsList = await this.splitCars(carsName);

      this.validateCarNames(carsList);

      const attempt = await this.inputAttempts();

      this.validateAttempts(attempt);

      const carsObject = this.initializeCarsObject(carsList);

      MissionUtils.Console.print("\n실행 결과");

      const carsPosition = await this.playRace(carsList, attempt, carsObject);
      const winnerList = this.findWinner(carsList, carsPosition);
      this.printWinner(winnerList);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
