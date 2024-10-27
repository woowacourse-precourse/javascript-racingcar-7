import RaceCar from '../Model/RaceCar.js';

class RaceCarManagementService {
  #raceCars;

  constructor() {
    this.#raceCars = [];
  }

  addRaceCar(raceCarName) {
    const raceCar = new RaceCar(raceCarName);
    this.#raceCars.push(raceCar);
  }

  getRaceCars() {
    return this.#raceCars;
  }
}

export default RaceCarManagementService;
