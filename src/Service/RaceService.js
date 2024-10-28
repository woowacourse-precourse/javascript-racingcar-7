class RaceService {
  #winners;

  constructor(
    raceCarManagementService,
    raceCarMovementService,
    determineWinnerService
  ) {
    this.raceCarManagementService = raceCarManagementService;
    this.raceCarMovementService = raceCarMovementService;
    this.determineWinnerService = determineWinnerService;
    this.#winners = null;
  }

  start(raceCarNames, attemptCount) {
    this.setupRaceCars(raceCarNames);
    this.runRace(attemptCount);
    this.determineWinner();
  }

  setupRaceCars(raceCarNames) {
    raceCarNames.forEach(raceCarName =>
      this.raceCarManagementService.addRaceCar(raceCarName)
    );
  }

  runRace(attemptCount) {
    const raceCars = this.raceCarManagementService.getRaceCars();

    for (let i = 0; i < attemptCount; i++) {
      this.raceCarMovementService.moveCars(raceCars);
    }
  }

  determineWinner() {
    const raceCars = this.raceCarManagementService.getRaceCars();

    this.#winners = this.determineWinnerService.determineWinners(raceCars);
  }

  getRaceRecords() {
    const raceCars = this.raceCarManagementService.getRaceCars();
    const raceCarRecords = raceCars.map(raceCar => raceCar.getRecords());
    const raceCarNames = raceCars.map(raceCar => raceCar.getName());
    const attemptCount = raceCarRecords[0].length;

    let raceRecords = [];

    for (let i = 0; i < attemptCount; i++) {
      let raceRecord = raceCarRecords.map(record => record[i]);
      raceRecords.push(raceRecord);
    }

    return {
      raceRaceCarNames: raceCarNames,
      raceRecords: raceRecords,
    };
  }

  getWinners() {
    return this.#winners;
  }
}

export default RaceService;
