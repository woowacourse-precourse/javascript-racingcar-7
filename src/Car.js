import { THRESHOLD } from './constants/threshold.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  move(randomNumber) {
    if (randomNumber >= THRESHOLD.MOVE) {
      this.points += 1;
    }
  }

  getName() {
    return this.name;
  }

  getPoints() {
    return this.points;
  }
}