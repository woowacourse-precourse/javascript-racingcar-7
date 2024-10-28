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
  }

  validateCarNames(cars) {
    for (let car of cars) {
      this.checkCarName(car);
    }
  }

  inputAttempts() {
    return MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
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

  async run() {
    try {
      const carsName = await this.inputCars();
      const carsList = await this.splitCars(carsName);

      this.validateCarNames(carsList);

      const attempt = await this.inputAttempts();
      const carsObject = this.initializeCarsObject(carsList);
      MissionUtils.Console.print("\n실행 결과");
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
