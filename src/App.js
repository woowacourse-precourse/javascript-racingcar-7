import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carsInput = await this.input(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const cars = this.separateCar(carsInput);
  }

  async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }

  separateCar(cars) {
    return cars.split(',');
  }
}

export default App;
