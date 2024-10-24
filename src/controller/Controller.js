import Car from '../model/Car.js';
import Race from '../model/Race.js';
import View from '../view/View.js';

class Controller {
  constructor() {
    this.view = new View();
  }

  async getCarName() {
    const carNames = await this.view.readUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    return carNames.split(',').map((name) => name);
  }

  async getMoveTimes() {
    const moveTimes = await this.view.readUserInput('시도할 횟수는 몇 회인가요?');

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
