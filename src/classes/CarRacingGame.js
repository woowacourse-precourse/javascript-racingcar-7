import Car from './Car.js';
import CarRacingOutputWriter from './CarRacingOutputWriter.js';

class CarRacingGame {
  constructor(carNames) {
    this.cars = carNames.map((e) => new Car(e));
  }

  startGame(totalRounds) {
    this.printStartMessage();
    this.playRounds(totalRounds);
    this.printWinners();
  }

  printStartMessage() {
    CarRacingOutputWriter.printStartMessage();
  }

  playRounds(totalRounds) {
    for (let i = 0; i < totalRounds; i++) {
      this.playRound();
      this.printRoundResults();
    }
  }

  playRound() {
    this.cars.forEach((car) => {
      car.attemptMove();
    });
  }

  printRoundResults() {
    CarRacingOutputWriter.printRoundResults(this.cars);
  }

  printWinners() {
    const winners = this.determineWinners();
    CarRacingOutputWriter.printWinners(winners);
  }

  determineWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars.filter((car) => car.distance === maxDistance);
    return winners.map((car) => car.name);
  }
}

export default CarRacingGame;
