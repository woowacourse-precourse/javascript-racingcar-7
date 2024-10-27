class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
