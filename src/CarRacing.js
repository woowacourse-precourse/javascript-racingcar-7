import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';

class CarRacing {
  #carList = [];
  #carNames = [];
  #attemptNumber;

  async #getCarNames() {
    const inputNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.#carNames = this.#validationNames(inputNames);
  }

  #validationNames(input) {
    const processedStr = input.split(',');
    const isSatisfyLength = processedStr.every((element) => element.length > 0 && element.length < 6);
    if(!isSatisfyLength) {
      throw new Error('[Error]');
    }
    return processedStr;
  }

  #generateCars() {
    this.#carList = this.#carNames.map((element) => {
      const car = new Car(element);
      return car;
    });
  }
  
  async #getAttemptNumber() {
    const inputNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#attemptNumber = this.#validationAttemptNumber(inputNumber);
  }

  #validationAttemptNumber(number) {
    const isSatisfyCondition = !Number.isNaN(number) && number % 1 === 0 && number > 0;
    if(!isSatisfyCondition) {
      throw new Error('[Error]');
    }
    return number;
  }

  #moveCars() {
    this.#carList.forEach((car) => {
      car.move();
      Console.print(car.showMileage());
    });
    Console.print('');
  }

  async initCarRacing() {
    await this.#getCarNames();
    this.#generateCars();
    await this.#getAttemptNumber();
  }

  runCarRacing() {
    Console.print('\n실행결과');
    for(let i = 0; i < this.#attemptNumber; ++i) {
      this.#moveCars();
    }
  }
}

export default CarRacing;
