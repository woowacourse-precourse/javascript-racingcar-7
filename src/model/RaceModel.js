class RaceModel {
  constructor(cars) {
    this.cars = cars;
  }

  getWinner() {
    const longestDistance = Math.max(...this.cars.map((car) => car.distance));
    return this.cars
      .filter((car) => car.distance === longestDistance)
      .map((car) => car.name);
  }
}
export default RaceModel;
