import Car from './Car.js';

class Game {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  moveAndGetResultOfAllCars() {
    return this.#cars.map((car) => {
      car.move();
      return car.getState();
    });
  }

  getWinner() {
    const carStates = this.#cars.map((car) => car.getState());
    const highestScore = Math.max(...carStates.map((car) => car.progress));
    return carStates.filter((car) => car.progress === highestScore).map((car) => car.name);
  }
}

export default Game;
