import { Console } from '@woowacourse/mission-utils';
import { Car } from './Car.js';

// 정확히 로그를 주는지 확인하기

class App {
  async run() {
    // TODO : 자동차 이름 validation 하기
    // TODO: 쉼표도 허용해야 하나?
    const carNames = await Console.readLineAsync('자동차 이름을 입력해 주세요');
    const carNamesSplit = carNames.split(',');
    const cars = [];

    const finishLine = parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?'),
      10,
    );

    carNamesSplit.forEach(carName => cars.push(new Car(carName)));
    if (cars.some(car => car.carName.length > 5)) {
      throw new Error('[ERROR]: 문자가 너무 많습니다.');
    }
    // Console.print('실행 결과');

    for (let i = 0; i < finishLine; i++) {
      cars.forEach(car => car.moveForward()); // 자동차 이동
      cars.forEach(car => Console.print(car.toString()));
    }

    const maxPosition = Math.max(...cars.map(car => car.position));

    const winners = cars
      .filter(car => car.position === maxPosition)
      .map(car => car.carName);

    if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      const result = winners.join(', ');

      Console.print(`최종 우승자 : ${result}`);
    }
  }
}

export default App;
