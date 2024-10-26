import Car from './Car';
import { Console } from '@woowacourse/mission-utils';

class CarRacing {
  #carList;
  #carNames;
  #attemptNumber;

  async #getCarNames() {
    const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.carNames = [...this.#validationNames(userInput)];
  }

  #validationNames(str) {
    const processedStr = str.split(',');
    const isSatisfyLength = processedStr.every((element) => element.length > 0 && element.length < 6);
    if(!isSatisfyLength) {
      throw new Error('[Error]');
    }
    return processedStr;
  }

  #generateCars() {
    this.carList = carNames.map((element) => {
      car = new Car(element);
      return car;
    })
  }
  
  async #getAttemptNumber() {
    const userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#attemptNumber = this.#validationAttemptNumber(userInput);
  }

  #validationAttemptNumber(number) {
    const isSatisfyCondition = !Number.isNaN(number) && number % 1 === 0 && number > 0;
    if(!isSatisfyCondition) {
      throw new Error('[Error]');
    }
    return number;
  }

  initCarRacing() {
    this.#getCarNames();
    this.#generateCars();
    this.#getAttemptNumber();
  }
}

export default CarRacing;
