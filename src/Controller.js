import OutputView from './View/OutputView.js';
import InputView from './View/InputView.js';
import CarModel from './Model/CarModel.js';
import { validateName, validateTryCount } from './validation.js';
import { getRandomNumber } from './utils/getRandomNumber.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async start() {
    const names = await this.getNames();
    const count = await this.getCount();

    const cars = this.createCars(names);
    this.outputView.printEmptyLine();
    this.outputView.printResult();

    this.runRace(cars, count);
    this.findWinner(cars);
  }

  runRace(cars, count) {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < cars.length; j++) {
        const car = cars[j];
        this.runSingleRound(car);
      }
      this.outputView.printEmptyLine();
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.getStep()));

    const MaxCars = cars.filter((car) => car.getStep() === max);
    const winners = MaxCars.map((car) => car.getName());

    this.outputView.printWinner(winners);
  }

  runSingleRound(car) {
    if (this.canMoveForward()) {
      car.move();
    }

    this.outputView.printStep(car.getName(), car.getStep());
  }

  createCars(names) {
    return names.map((name) => new CarModel(name));
  }

  canMoveForward() {
    const randomNumber = getRandomNumber();

    if (randomNumber >= 4) {
      return true;
    }

    return false;
  }

  async getNames() {
    const rawInput = this.inputView.getInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const input = await rawInput;

    const names = input.split(',').map((name) => name.trim());
    validateName(names);

    return names;
  }

  async getCount() {
    const count = this.inputView.getInput('시도할 횟수는 몇 회인가요?\n');

    validateTryCount(await count);

    return count;
  }
}
