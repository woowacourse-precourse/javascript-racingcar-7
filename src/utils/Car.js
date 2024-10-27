class Car {
  constructor(name) {
    this.name = name.trim();
    this.position = '';
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  getPosition() {
    return `${this.name} : ${this.position}`;
  }
}
export default Car;
