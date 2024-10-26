import { Console } from '@woowacourse/mission-utils';
import { RacingGame, Validator } from './class/index.js';

class App {
  async run() {
    const nameString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const validatedNames = Validator.validateName(nameString.trim());

    const numberOfAttempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const validatedCounts = Validator.validateAttempt(Number(numberOfAttempts));

    const racingGame = new RacingGame(validatedNames);
    const winner = racingGame.play(validatedCounts);
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
