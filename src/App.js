import Game from './Game.js';
import InputProcessor from './InputProcessor.js';
import Validator from './Validator.js';

class App {
  #carNames;

  #totalRounds;

  async run() {
    await this.#setCarNames();
    await this.#setTotalRounds();

    const game = new Game(this.#carNames, this.#totalRounds);
    game.start();
    game.printGameResult();
  }

  async #setCarNames() {
    this.#carNames = await InputProcessor.get('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n');
    this.#carNames = this.#carNames.split(',');
    Validator.carName(this.#carNames);
  }

  async #setTotalRounds() {
    this.#totalRounds = await InputProcessor.get('시도할 횟수는 몇 회인가요? \n');
    Validator.rounds(this.#totalRounds);
  }
}

export default App;
