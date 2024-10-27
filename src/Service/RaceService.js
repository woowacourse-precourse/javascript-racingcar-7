class RaceService {
  #winners;

  constructor(
    carManagementService,
    carMovementService,
    determineWinnerService
  ) {
    this.carManagementService = carManagementService;
    this.carMovementService = carMovementService;
    this.determineWinnerService = determineWinnerService;
    this.#winners = null;
  }

  start(carNames, attemptCount) {
    this.setupCars(carNames);
    this.runRace(attemptCount);
    this.determineWinner();
  }

  setupCars(carNames) {
    carNames.forEach(carName => this.carManagementService.addCar(carName));
  }

  runRace(attemptCount) {
    const cars = this.carManagementService.getCars();

    for (let i = 0; i < attemptCount; i++) {
      this.carMovementService.moveCars(cars);
    }
  }

  determineWinner() {
    const cars = this.carManagementService.getCars();

    this.#winners = this.determineWinnerService.determineWinners(cars);
  }

  getRaceRecords() {
    const cars = this.carManagementService.getCars();
    const carRecords = cars.map(car => car.getRecords());
    const carNames = cars.map(car => car.getName());
    const attemptCount = carRecords[0].length;

    let raceRecords = [];

    for (let i = 0; i < attemptCount; i++) {
      let raceRecord = carRecords.map(record => record[i]);
      raceRecords.push(raceRecord);
    }

    return {
      raceCarNames: carNames,
      raceRecords: raceRecords,
    };
  }

  getWinners() {
    return this.#winners;
  }
}

export default RaceService;
