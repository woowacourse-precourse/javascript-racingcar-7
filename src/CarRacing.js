import Car from './Car';
import { Console } from '@woowacourse/mission-utils';

class CarRacing {
  #carList;
  #carNames;

  async #getCarNames() {
    const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    carNames = [...this.#validationNames(userInput)];
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
    carList = carNames.map((element) => {
      car = new Car(element);
      return car;
    })
  }

  initCarRacing() {
    this.#getCarNames();
    this.#generateCars();
  }
}

export default CarRacing;
