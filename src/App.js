import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCar = await this.getInputCarNames();
    const inputCount = await this.getInputCount();

    let cars = this.initializeCars(inputCar);
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
}

export default App;
