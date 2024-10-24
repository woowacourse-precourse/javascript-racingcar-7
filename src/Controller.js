import { Random, Console } from '@woowacourse/mission-utils';
import View from './View.js';
import CarModel from './CarModel.js';
import { validateName, validateTryCount } from './validation.js';

export default class Controller {
  constructor() {
    this.view = new View();
  }

  async start() {
    const names = await this.getNames();
    const count = await this.getCount();

    const cars = this.createCars(names);
    this.printMessage();
    this.printMessage('실행 결과');

    this.runRace(cars, count);
    this.findWinner(cars);
  }

  runRace(cars, count) {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < cars.length; j++) {
        const car = cars[j];
        this.runSingleRound(car);
      }
      this.printMessage();
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.step));

    const MaxCars = cars.filter((car) => car.step === max);
    const winners = MaxCars.map((car) => car.name);

    this.view.printWinner(winners);
  }

  runSingleRound(car) {
    if (this.canMoveForward()) {
      car.move();
    }

    this.view.printStep(car.name, car.step);
  }

  createCars(names) {
    return names.map((name) => new CarModel(name));
  }

  canMoveForward() {
    const randomNumber = this.getRandomNumber();

    if (randomNumber >= 4) {
      return true;
    }

    return false;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  async getNames() {
    const rawInput = this.view.getInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const input = await rawInput;

    const names = input.split(',').map((name) => name.trim());
    validateName(names);

    return names;
  }

  async getCount() {
    const count = this.view.getInput('시도할 횟수는 몇 회인가요?\n');

    validateTryCount(await count);

    return count;
  }

  printMessage(message) {
    if (message) {
      Console.print(message);
    } else {
      Console.print('');
    }
  }
}
