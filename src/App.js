import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';

class App {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  async run() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.cars = this.createCars(carNamesInput);

    const tryCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.tryCount = this.convertToNumber(tryCountInput);

    this.startRace();
  }

  createCars(carNamesInput) {
    return carNamesInput.split(',').map(name => this.createCar(name));
  }

  createCar(name) {
    if (name.length > 5) throw new Error('[ERROR] 자동차의 이름은 5자 이하만 가능합니다.');

    return new Car(name);
  }

  convertToNumber(tryCountInput) {
    const isNumber = tryCountInput.trim().match(/^[0-9]+$/);

    if (!isNumber) throw new Error('[ERROR] 시도할 횟수가 숫자가 아닙니다.');

    return +tryCountInput.trim();
  }

  startRace() {
    Console.print('\n실행결과');
  }
}

export default App;
