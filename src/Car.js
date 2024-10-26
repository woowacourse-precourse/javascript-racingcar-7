class Car {
  constructor(name) {
    this.name = name;
    this.moveHistory = '';
  }

  get getName() {
    return this.name;
  }

  get getMoveHistory() {
    return this.moveHistory;
  }

  move(record) {
    if (record >= 4) {
      this.moveHistory += '-';
    }
  }
}

export default Car;
