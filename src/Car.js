class Car {
  constructor(name) {
    this.name = name;
    this.moveHistory = '';
  }

  getName() {
    return this.name;
  }

  getMoveHistory() {
    return this.moveHistory;
  }

  move() {
    this.moveHistory += '-';
  }
}

export default Car;
