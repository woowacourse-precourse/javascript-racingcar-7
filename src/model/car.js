import { CAR } from '../utils/constants.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.currentLocation = CAR.DEFAULT_LOCATION;
  }

  move() {
    this.currentLocation++;
  }

  getName() {
    return this.name;
  }

  getLocation() {
    return this.currentLocation;
  }
}
