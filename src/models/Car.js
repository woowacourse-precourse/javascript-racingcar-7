class Car {
  constructor(name) {
    this.name = name.trim;
    this.position = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return  this.position;
  }
}

export default Car;