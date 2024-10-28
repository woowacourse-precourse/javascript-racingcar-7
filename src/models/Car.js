class Car {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  addAdvance() {
    this.advance += 1;
  }
}

export default Car;
