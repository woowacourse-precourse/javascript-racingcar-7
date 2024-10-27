import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = "";
  }
  getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
  move(randomNumber) {
    const randomNumber = this.getRandomNumber();
    if (randomNumber >= 4) { this.position += "-"; }
  }
}
export default Car;