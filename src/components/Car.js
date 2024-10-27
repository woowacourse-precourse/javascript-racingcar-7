import Rules from '../resources/Rules.js';

class Car {
  constructor(name) {
    this.name = name;
    this.currentDistance = Rules.INITIAL_DISTANCE;
  }

  moveForward() {
    this.currentDistance += Rules.MOVE_LENGTH;
  }
}
export default Car;
