import Car from './Car.js';
import CarRacingOutputWriter from './CarRacingOutputWriter.js';

class CarRacingGame {
  constructor(carNames) {
    this.cars = carNames.map((e) => new Car(e));
  }

  startGame(totalRounds) {
    CarRacingOutputWriter.printStartMessage();

    for (let i = 0; i < totalRounds; i++) {
      this.playRound();
      CarRacingOutputWriter.printRoundResults(this.cars);
    }

    CarRacingOutputWriter.printWinners(this.determineWinners());
  }

  playRound() {
    this.cars.forEach((car) => {
      car.attemptMove();
    });
  }

  determineWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars.filter((car) => car.distance === maxDistance);
    return winners.map((car) => car.name);
  }
}

export default CarRacingGame;
