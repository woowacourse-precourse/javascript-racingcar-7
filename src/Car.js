import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
  moveTrue(randomNumber) {
    if (randomNumber >= 4) return true;
    return false;
  }
  move() {
    const randomNumber = this.getRandomNumber();
    if (this.moveTrue(randomNumber)) this.position += 1;
  }
  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}
export default Car;