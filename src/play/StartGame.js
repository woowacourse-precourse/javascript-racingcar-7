import { Console, Random } from '@woowacourse/mission-utils';
import PrintResult from '../io/PrintResult.js';

class StartGame {
  static start(carNames, tryCount) {
    Console.print('\n실행 결과');
    const cars = carNames.map((name) => ({ name, position: 0 }));

    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) > 3) {
          car.position++;
        }
      });
      PrintResult.print(cars);
    }

    PrintResult.printWinner(cars);
  }
}

export default StartGame;