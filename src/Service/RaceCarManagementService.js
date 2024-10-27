import RaceCar from '../Model/RaceCar.js';
import ICarManagementService from './Interfaces/ICarManagementService.js';

class RaceCarManagementService extends ICarManagementService {
  #raceCars;

  constructor() {
    super();
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
