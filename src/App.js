import { Console } from '@woowacourse/mission-utils';
import Racer from './Racer.js';
import Racing from './Racing.js';

class App {
  #totalRound = 0;

  #racers = [];

  async run() {
    const firstUserInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n',
    );
    const secondUserInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');

    this.#racers = firstUserInput.split(',').map((racer) => {
      if (racer.length >= 6) {
        throw new Error('[ERROR] : 이름은 5글자 이하로 입력해주세요');
      }
      return new Racer(racer);
    });
    this.#totalRound = Number(secondUserInput);

    this.racing = new Racing({
      totalRound: this.#totalRound,
      racers: this.#racers,
    });

    this.racing.start().getResultByRound();
    const winners = this.racing.getWinners();

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
