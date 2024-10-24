import View from '../View.js';

class RacingController {
  #view;

  constructor(view) {
    this.#view = view;
  }

  async run() {
    const carInput = await this.#view.readInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const countInput = await this.#view.readInput('시도할 횟수는 몇 회인가요?');
  }
}

export default new RacingController(new View());
