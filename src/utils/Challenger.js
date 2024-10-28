class Challenger {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  goForward() {
    this.distance++;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }
}

export default Challenger;
