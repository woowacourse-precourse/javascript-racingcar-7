import { MESSAGES } from '../constant/Constants.js';
import Car from '../model/Car.js';
import Race from '../model/Race.js';
import View from '../view/View.js';
import Validator from './../validator/Validator.js';

class Controller {
  constructor() {
    this.view = new View();
  }

  async getCarName() {
    const carNames = await this.view.readUserInput(MESSAGES.PROMPT.GET_CAR_NAMES);
    Validator.isValidCarName(carNames);

    return carNames.split(',').map((name) => name);
  }

  async getMoveTimes() {
    const moveTimes = await this.view.readUserInput(MESSAGES.PROMPT.GET_MOVE_TIMES);
    Validator.isValidMoveTimes(moveTimes);

    return moveTimes;
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  runRace(carMap, moveTimes) {
    const race = new Race(carMap);

    for (let move = 0; move < moveTimes; move++) {
      race.moveAllCars();
      this.view.printRacingCars(carMap);
    }

    return race.getWinner();
  }

  async startGame() {
    const carNames = await this.getCarName();
    const moveTimes = await this.getMoveTimes();
    const carMap = this.createCars(carNames);
    const winner = this.runRace(carMap, moveTimes);
    this.view.printWinner(winner);
  }
}

export default Controller;
