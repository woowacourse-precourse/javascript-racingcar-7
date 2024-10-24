export default class Game {
  constructor(cars, round) {
    this.cars = cars;
    this.round = round;
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getCarName());
  }
}
