class Car {
  constructor(name, moveCount = 0) {
    this.name = name;
    this.moveCount = moveCount;
  }

  getName() {
    return this.name;
  }

  getMoveCount() {
    return this.moveCount;
  }
}

export default Car;
