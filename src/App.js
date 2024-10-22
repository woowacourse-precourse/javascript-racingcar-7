import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async run() {
    try {
      const carInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const cars = carInput.split(',').map((name) => new Car(name));
    } catch (e) {}
  }
}

export default App;
