import { Console } from '@woowacourse/mission-utils';
import Game from './Game.js';
import Validator from './Validator.js';

class App {
  #carNames;

  #totalRounds;

  async run() {
    this.#carNames = await App.#getValidatedCarNames();
    this.#totalRounds = await App.#getTotalRounds();

    const game = new Game(this.#carNames, this.#totalRounds);
    game.start();
    game.printGameResult();
  }

  static async #getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n');
    return input;
  }

  static async #getTotalRounds() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    Validator.minRound(input);
    return input;
  }

  static async #getValidatedCarNames() {
    const input = await App.#getCarNames();
    const carNames = input.split(',');

    Validator.IsEmpty(carNames);
    Validator.arrayLength(carNames);
    Validator.stringLength(carNames);

    return carNames;
  }
}

export default App;
