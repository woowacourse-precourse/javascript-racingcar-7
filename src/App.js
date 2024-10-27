import { Console } from '@woowacourse/mission-utils';
import CarRacing from './class/CarRacing.js';

class App {
  async run() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const game = new CarRacing(carNames.split(','));
    console.log(game);
  }
}

export default App;
