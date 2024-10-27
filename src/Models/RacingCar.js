class RacingCar {
  constructor(name) {
    this.name = name;
    this.movedDistance = 0;
  }

  move(distance = 1) {
    this.movedDistance += distance;
  }
}

export default RacingCar;
