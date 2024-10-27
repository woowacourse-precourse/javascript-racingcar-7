import Car from "./Car.js";

class CarRacingGame {
  constructor(carNames) {
    this.cars = carNames.split(',').map(name => new Car(name));
  }

  playOneRound() {
    this.cars.forEach(car => {
      const randomValue = car.generateRandomValue();
      car.tryToMove(randomValue);
    });

    return this.cars.map(car => ({name: car.name, moveCount: car.moveCount}));
  }

  getWinners() {
    const maxMoveCount = Math.max(...this.cars.map(car => car.moveCount));
    return this.cars
    .filter(car => car.moveCount === maxMoveCount)
    .map(car => car.name);
  }
}

export default CarRacingGame;
