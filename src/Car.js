class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  get Name() {
    return this.name;
  }

  get Distance() {
    return this.distance;
  }

  increaseDistance() {
    return this.distance++;
  }
}
export default Car;
