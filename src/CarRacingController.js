import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import InputValidator from "./InputValidator.js";
import View from "./View.js";

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
    const carNamesInput = await View.readCarNames();
    const carNames = InputValidator.validateCarNames(carNamesInput);
    this.cars = carNames.map(name => new Car(name));
    
    const attemptsInput = await View.readAttempts();
    this.attempts = InputValidator.validateAttempts(attemptsInput);
  }

  async raceLoop() {
    for (let i = 0; i < this.attempts; i++) {
      this.moveAllCars();
      View.printRaceStatus(this.cars);
    }
  }

  moveAllCars() {
    this.cars.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
    });
  }

  announceWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition()));
    const winners = this.cars.filter(car => car.getPosition() === maxPosition);
    View.printWinners(winners);
  }
}