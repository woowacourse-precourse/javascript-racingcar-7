class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }
  moveForward() {
    this.distance += "-";
  }
}

export default Car;