import Car from "./car.js";

class Game {
  constructor() {
    this.cars = [];
    this.tries = 0;
    this.rounds = [];
  }

  setCarInfos(cars) {
    return cars.map((car) => new Car(car));
  }

  setGame(cars, tries) {
    this.cars = this.setCarInfos(cars);
    this.tries = tries;
  }

  startGame() {
    for (let i = 0; i < this.tries; i++) {
      this.playEachRound();
      this.rounds.push(
        this.cars.map((car) => ({ name: car.getCarName(), forwardCount: car.getForwardCount() }))
      );
    }
  }

  playEachRound() {
    this.cars.forEach((car) => {
      car.moveForward();
    });
  }

  getRecords() {
    return this.rounds;
  }

  getWinners() {
    const maxForwardCount = Math.max(...this.cars.map((car) => car.getForwardCount()));

    return this.cars
      .filter((car) => car.getForwardCount() === maxForwardCount)
      .map((car) => car.getCarName());
  }
}

export default Game;
