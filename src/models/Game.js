export default class Game {
  constructor(cars, round) {
    this.cars = cars;
    this.round = round;
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }
}
