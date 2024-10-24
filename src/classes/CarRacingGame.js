import Car from './Car.js';

class CarRacingGame {
  constructor(carNames) {
    this.cars = carNames.map((e) => new Car(e));
  }

  startGame(totalRounds) {
    for (let i = 0; i < totalRounds; i++) {
      this.playRound();
    }

    this.determineWinners();
  }

  playRound() {
    this.cars.forEach((car) => {
      car.attemptMove();
    });
  }

  determineWinners() {
    const winner = this.cars.reduce((winnerCar, currentCar) => {
      if (winnerCar.distance < currentCar.distance) {
        return currentCar;
      }

      return winnerCar;
    });

    return winner.name;
  }
}

export default CarRacingGame;
