class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  attemptMove(isMovable) {
    if (isMovable) {
      this.move += 1;
    }
  }
}

export default Car;
