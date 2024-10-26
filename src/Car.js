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

  move(record) {
    if (record >= 4) {
      this.moveHistory += '-';
    }
  }
}

export default Car;
