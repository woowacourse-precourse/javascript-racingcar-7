class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.carPositions = this.initializeCarPositions(cars);
  }

  initializeCarPositions(cars) {
    const carPositions = {};
    cars.forEach((car) => {
      carPositions[car] = "";
    });
    return carPositions;
  }
}

export default Race;
