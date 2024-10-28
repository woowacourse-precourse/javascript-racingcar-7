// import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class Race {
  constructor(carNames) {
    this.cars = this.createCars(carNames);
  }

  createCars(carNames) {
    const names = carNames.split(',').map(name => name.trim());
    return names.map(name => new Car(name));
  }

  validateAttempts(attempts) {
    if (isNaN(attempts) || attempts < 1) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }
  }
}