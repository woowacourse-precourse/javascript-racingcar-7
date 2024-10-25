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

  getName() {
    return this.name;
  }
}

export default Car;
