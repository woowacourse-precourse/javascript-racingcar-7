import Car from "../domain/Car.js";
import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RandomNumber from "../utils/RandomNumber.js";
import { STATIC_NUMBER } from "../static/Static.js";

export default class CarRacingController {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      await this.initializeGame();
      await this.raceLoop();
      this.announceWinners();
    } catch (error) {
      throw error;
    }
  }

  async initializeGame() {
    const carNamesInput = await InputView.readCarNames();
    const carNames = InputValidator.validateCarNames(carNamesInput);
    this.cars = carNames.map(name => new Car(name));
    
    const attemptsInput = await InputView.readAttempts();
    this.attempts = InputValidator.validateAttempts(attemptsInput);
  }

  async raceLoop() {
    for (let i = 0; i < this.attempts; i++) {
      this.moveAllCars();
      OutputView.printRaceStatus(this.cars);
    }
  }

  moveAllCars() {
    this.cars.forEach(car => {
      const randomNumber = RandomNumber.pickNumberInRange(STATIC_NUMBER.randomMinNumber, STATIC_NUMBER.randomMaxNumber);
      car.move(randomNumber);
    });
  }

  announceWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition()));
    const winners = this.cars.filter(car => car.getPosition() === maxPosition);
    OutputView.printWinners(winners);
  }
}