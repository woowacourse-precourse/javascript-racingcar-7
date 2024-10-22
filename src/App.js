import { Console } from '@woowacourse/mission-utils';
import { Car } from './Car.js';

class App {
  async run() {
    // TODO : 자동차 이름 validation 하기
    // TODO: 쉼표도 허용해야 하나?
    const carNames = await Console.readLineAsync('자동차 이름을 입력해 주세요');
    const carNamesSplit = carNames.split(',');
    const cars = [];
    let finished = false;
    const finishLine =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    carNamesSplit.map(carName => cars.push(new Car(carName)));
    while (finished) {
      cars.map(car => car.moveForward);
    }
  }
}

export default App;
