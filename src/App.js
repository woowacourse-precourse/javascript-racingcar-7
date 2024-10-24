import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async run() {
    try {
      const inputCarNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      if (!this.validateCarNamesLength(inputCarNames.split(',')))
        throw new Error('자동차의 이름은 5글자 이하로 입력해주세요.');

      const cars = inputCarNames.split(',').map(carName => new Car(carName));

      const inputTryCnt =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      const tryCnt = Number(inputTryCnt);
      if (tryCnt < 0)
        throw new Error('이동을 시도할 횟수는 0보다 큰 값이어야 합니다.');

      Console.print('\n실행 결과');
      for (let i = 0; i < tryCnt; i++) {
        cars.forEach(car => {
          car.moveForward();
          car.printMoveResult();
        });
        Console.print('\n');
      }

      const maxMoveForward = cars.reduce((acc, curr) => {
        if (acc < curr.getMoveFowradCnt()) return curr.getMoveFowradCnt();
        return acc;
      }, 0);

      Console.print(
        `최종 우승자 : ${cars
          .filter(car => car.getMoveFowradCnt() === maxMoveForward)
          .map(car => car.getName())
          .join(',')}`,
      );
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  validateCarNamesLength(carNames) {
    return carNames.every(name => name.length <= 5);
  }
}

export default App;
