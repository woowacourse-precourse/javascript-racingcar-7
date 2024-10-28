import { MOVE_FORWARD_MIN_VALUE } from "./constants";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(randomNumber) {
    if (randomNumber >= MOVE_FORWARD_MIN_VALUE) {
      this.position++;
    }
  }
}
