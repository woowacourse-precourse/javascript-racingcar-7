import View from './View.js';
import { validateName } from './validation.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.names = [];
  }

  async start() {
    this.names = await this.getNames();
  }

  async getNames() {
    const rawInput = this.view.getInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const input = await rawInput;

    const names = input.split(',').map((name) => name.trim());
    validateName(names);

    return names;
  }
}
