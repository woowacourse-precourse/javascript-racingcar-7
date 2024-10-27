class Car {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  getPosition() {
    return `${this.name} : ${'-'.repeat(this.advance)}`;
  }
}

export default Car;
