import View from '../view/View.js';

class Controller {
  constructor() {
    this.view = new View();
  }

  async getCarName() {
    const carNames = await this.view.readUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');

    return carNames.split(',').map((name) => name);
  }

  async getMoveTimes() {
    const moveTimes = await this.view.readUserInput('시도할 횟수는 몇 회인가요?');

    return moveTimes;
  }

  async startGame() {
    const carNames = await this.getCarName();
    const moveTimes = await this.getMoveTimes();
  }
}

export default Controller;
