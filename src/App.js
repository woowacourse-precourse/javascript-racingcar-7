import { Console } from '@woowacourse/mission-utils';
import Game from './Game.js';
import Validator from './Validator.js';
import invokeCallbackByCount from './utils/invokeCallbackByCount.js';

class App {
  #input;

  #count;

  #result;

  #winners;

  async run() {
    this.#input = await App.#getValidatedCarNames();
    this.#count = await App.#getPlayCount();

    const game = new Game(this.#input, this.#count);

    Console.print('\n실행 결과\n');
    invokeCallbackByCount(this.#count, game.start.bind(game));
    this.#result = game.gameResult();

    this.#winners = this.#getWinners();
    this.#print();
  }

  static async getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n');
    return input;
  }

  static async #getPlayCount() {
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    return count;
  }

  static async #getValidatedCarNames() {
    const input = await App.getCarNames();
    const carNames = input.split(',');

    Validator.IsEmpty(carNames);
    Validator.arrayLength(carNames);
    Validator.stringLength(carNames);

    return carNames;
  }

  #getWinners() {
    const winners = [];
    let maxScore = 0;

    [...this.#result].forEach(([car, score]) => {
      if (maxScore > score) return;
      if (maxScore < score) {
        if (winners.length > 0) {
          winners.pop();
        }
      }
      maxScore = score;
      winners.push(car);
    });
    return winners.join(' ,');
  }

  #print() {
    Console.print(`최종 우승자 : ${this.#winners}`);
  }
}

export default App;
