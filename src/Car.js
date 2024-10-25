import {
  DEFAULT_CAR_DISTANCE,
  MOVE_INCREMENT,
  MOVEMENT_MINIMUM,
} from "./constants.js";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = DEFAULT_CAR_DISTANCE;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(distance) {
    this.distance = distance;
  }

  move(randomNumber) {
    if (randomNumber >= MOVEMENT_MINIMUM) {
      this.setDistance(this.distance + MOVE_INCREMENT);
    }
  }

  getStringDistance() {
    var distanceString = "";
    for (let i = 0; i < this.distance; i++) {
      distanceString += "-";
    }
    return `${this.name} : ${distanceString}\n`;
  }
}

export default Car;
