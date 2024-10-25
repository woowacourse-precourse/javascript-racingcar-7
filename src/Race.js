import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  generateRandomNumber() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomValue;
  }

  canMoveForward(randomValue) {
    if (randomValue >= 4) return true;
    return false;
  }

  move() {
    const randomValue = this.generateRandomNumber();
    if (this.canMoveForward(randomValue)) this.distance += 1;
  }

  getDistance() {
    return this.distance;
  }
}

export default class Race {
  constructor(input, tries) {
    this.cars = this.getValidCarNames(input);
    this.tries = this.convertToNumber(tries);
  }

  splitInputByComma(input) {
    return input.split(",").map((name) => name.trim());
  }

  inValidCarNameLength(carName) {
    if (carName.length <= 5) return true;
    throw new Error("[ERROR] 자동차의 이름은 5자 이하여야 합니다.");
  }

  getValidCarNames(input) {
    const carNames = this.splitInputByComma(input);
    carNames.forEach((carName) => {
      this.inValidCarNameLength(carName);
    });
    return carNames.map((car) => new Car(car));
  }

  convertToNumber(tries) {
    const tryNum = Number(tries);
    if (isNaN(tryNum) || tryNum < 0) {
      // 변환 값이 NaN이거나 음수인 경우 Error
      throw new Error("[ERROR] 0 이상의 숫자를 입력해주세요");
    }
    return tryNum;
  }

  start() {
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.tries; i++) {
      this.logRaceResult();
      MissionUtils.Console.print("");
    }
  }

  printRaceResult() {
    this.cars.forEach((car) => {
      car.move();
      MissionUtils.Console.print(
        `${car.name} : ${"-".repeat(car.getDistance())}`
      );
    });
  }

  printWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
