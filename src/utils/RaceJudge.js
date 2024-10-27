class RaceJudge {
  constructor(cars) {
    this.cars = cars;
  }

  decideWinners() {
    const maxDistance = Math.max(...this.cars.map(car => car.position.length));
    const winners = this.cars.filter(
      car => car.position.length === maxDistance,
    );

    console.log(winners.map(car => car.name));
    return winners.map(car => car.name);
  }
}
export default RaceJudge;
