import View from '../View.js';
import Validator from '../Validator.js';
import Race from '../Race.js';

class RacingController {
  #view;
  #validator;
  #race;
  
  constructor(view, validator, race) {
    this.#view = view;
    this.#validator = validator;
    this.#race = race;
  }

  async run() {
    const carNamesInput = await this.#view.readInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const raceCountInput =
      await this.#view.readInput('시도할 횟수는 몇 회인가요?');

    const { carNames, raceCount } = this.#validator.validate(
      carNamesInput,
      raceCountInput,
    );

    const { winnerNames, history } = this.#race.result(carNames, raceCount);

    this.#view.printRaceResult(winnerNames, history);
  }
}

export default new RacingController(new View(), new Validator(), new Race());
