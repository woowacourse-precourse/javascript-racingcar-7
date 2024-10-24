import Validator from '../Validator.js';
import View from '../View.js';

class RacingController {
  #view;
  #validator;

  constructor(view,validator) {
    this.#view = view;
    this.#validator = validator;
  }

  async run() {
    const carNamesInput = await this.#view.readInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const raceCountInput =
      await this.#view.readInput('시도할 횟수는 몇 회인가요?');

    this.#validator.validate(carNamesInput, raceCountInput);
  }
}

export default new RacingController(new View(), new Validator());
