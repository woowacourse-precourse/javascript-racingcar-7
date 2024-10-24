import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCar = await this.getInputCarNames();
    const inputCount = await this.getInputCount();

    let cars = this.initializeCars(inputCar);

    this.runRace(cars);
  }

  async getInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }

  async getInputCount() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }

  initializeCars(inputCar) {
    let cars = {};
    inputCar.split(',').forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
      cars[car] = 0;
    });
    return cars;
  }

  runRace(cars) {
    Object.keys(cars).forEach((car) => {
      let randomValue = Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        cars[car] += 1;
      }
    });
  }
}

export default App;
