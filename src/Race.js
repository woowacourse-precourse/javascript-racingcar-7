import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
class Race {
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
    if (isNaN(tryNum) || tryNum <= 0) {
      // 변환 값이 NaN이거나 0,음수인 경우 Error
      throw new Error("[ERROR] 1 이상의 숫자를 입력해주세요");
    }
    return tryNum;
  }

  start() {
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.tries; i++) {
      this.printRaceResult();
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
  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);

    return winners;
  }
  printWinners() {
    const winners = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default Race;
