class CarModel {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(value) {
    if (value >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);
  }
}
