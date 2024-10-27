import { Console } from '@woowacourse/mission-utils';
import CarRacing from './class/CarRacing.js';

class App {
  async run() {
    const cars = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const attemptCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const game = new CarRacing(cars.split(','), attemptCount);
    Console.print('\n실행 결과');
    game.startRace();
  }
}

export default App;
