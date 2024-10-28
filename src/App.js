import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n");
    const inputCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    let carsList = this.getCarList(inputCars);
  }

  getCarList(str) {
    const cars = str.split(",");

    if (!cars.every(car => car.length <= 5)) {
      this.throwError('자동차 이름은 5자 이하만 가능합니다.')
    }

    let carList = {};
    cars.forEach(car => {
      carList[`${car}`] = 0
    });

    return carList;
  }

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default App;
