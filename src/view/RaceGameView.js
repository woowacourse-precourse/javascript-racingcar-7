import RaceGameController from '../controller/RaceGameController.js';

const UI = {
  PLEASE_INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  PLEASE_INPUT_ITERATION_NUMBER: '시도할 횟수는 몇 회인가요?\n',
};

class RaceGameView {
  #io;

  constructor (io) {
    this.#io = io;
  }

  async getCarNames () {
    const input = await this.#io.in(UI.PLEASE_INPUT_CAR_NAMES);
    return RaceGameController.onGetRaceCarNames(input);
  }

  async getIteration () {
    const input = await this.#io.in(UI.PLEASE_INPUT_ITERATION_NUMBER);
    return RaceGameController.onGetIteration(input);
  }

  showStatus (cars) {
    for (const car of cars) {
      const { name, move } = car;
      this.#io.out(`${name} : ${'-'.repeat(move)}`);
    }
    this.#io.out('');
  }

  showWinner (winners) {
    const message = `최종 우승자 : ${winners.join(', ')}`;
    this.#io.out(message);
  }

  out (message) {
    this.#io.out(message);
  }
}

export default RaceGameView;
