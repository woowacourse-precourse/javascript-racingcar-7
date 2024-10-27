class Car {
  constructor(name) {
    this.name = name;
    this.currentDistance = 0;
  }

  moveForward() {
    this.currentDistance += 1;
  }
}
export default Car;
