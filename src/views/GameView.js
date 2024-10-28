import { Console } from '@woowacourse/mission-utils';

class GameView {
  static displayRoundResult(cars) {
    cars.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print(''); // 빈 줄 출력
  }
}

export default GameView;
