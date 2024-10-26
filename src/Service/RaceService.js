import CarManagementService from './CarManagementService.js';
import DetermineWinnerService from './DetermineWinnerService.js';
import CarMovementService from './CarMovementService.js';

class RaceService {
  #winners;

  constructor() {
    this.carService = new CarManagementService();
    this.carMovementService = new CarMovementService();
    this.determineWinnerService = new DetermineWinnerService();
    this.#winners = null;
  }

  start(carNames, attemptCount) {
    this.setupCars(carNames);
    this.runRace(attemptCount);
    this.determineWinner();
  }

  setupCars(carNames) {
    carNames.forEach(carName => this.carService.addCar(carName));
  }

  runRace(attemptCount) {
    const cars = this.carService.getCars();

    for (let i = 0; i < attemptCount; i++) {
      this.carMovementService.moveCars(cars);
    }
  }

  determineWinner() {
    const cars = this.carService.getCars();

    this.#winners = this.determineWinnerService.determineWinners(cars);
  }

  getWinners() {
    return this.#winners;
  }
}

export default RaceService;
