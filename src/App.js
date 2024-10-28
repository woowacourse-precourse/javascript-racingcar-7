import { Console } from '@woowacourse/mission-utils';
import RacingGame from './RacingGame.js';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carNamesInput = await Console.readLineAsync();
    const carNames = this.parseCarNames(carNamesInput);

    Console.print('시도할 횟수는 몇 회인가요?');
    const roundsInput = await Console.readLineAsync();
    const rounds = this.parseRounds(roundsInput);

    const game = new RacingGame(carNames, rounds);
    this.playGame(game);
    this.displayWinners(game);
  }

  parseCarNames(input) {
    const names = input.split(',').map(name => name.trim());
    if (names.some(name => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.');
    }
    return names;
  }

  parseRounds(input) {
    const rounds = Number(input);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자로 입력해야 합니다.');
    }
    return rounds;
  }

  playGame(game) {
    for (let i = 0; i < game.rounds; i++) {
      game.playRound();
      game.displayResults();
    }
  }

  displayWinners(game) {
    const winners = game.getWinners();
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;

