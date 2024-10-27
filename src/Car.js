class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(randomSingleDigitGenerator) {
    if (this.isRandomSingleDigitOverThree(randomSingleDigitGenerator)) {
      this.position += 1;
    }
  }

  isRandomSingleDigitOverThree(randomSingleDigitGenerator) {
    return randomSingleDigitGenerator.generate() > 3;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
