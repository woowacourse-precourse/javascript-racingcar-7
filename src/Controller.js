import View from './View.js';
import { validateName, validateTryCount } from './validation.js';

export default class Controller {
  constructor() {
    this.view = new View();
  }

  async start() {
    const names = await this.getNames();
    const count = await this.getCount();
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

  async getCount() {
    const count = this.view.getInput('시도할 횟수는 몇 회인가요?\n');

    validateTryCount(await count);

    return count;
  }
}
