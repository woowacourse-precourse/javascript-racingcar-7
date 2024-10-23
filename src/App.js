import { Console } from '@woowacourse/mission-utils';
import { RacingGame } from './class/index.js';

class App {
  constructor() {
    this.racingGame = new RacingGame();
  }

  async run() {
    const nameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const tryInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const result = this.racingGame.play(nameInput, tryInput);
    Console.print(`최종 우승자 : ${result}`);
  }
}

export default App;
