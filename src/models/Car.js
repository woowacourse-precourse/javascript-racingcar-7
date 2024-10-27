const INITIAL_POSITION = 0;
const MOVE_DISTANCE = 1;

class Car {
  constructor(name) {
    this.position = INITIAL_POSITION;
    this.name = name;
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }

  move() {
    this.position += MOVE_DISTANCE;
  }
}

export default Car;
