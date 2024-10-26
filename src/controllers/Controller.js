import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const carInput = await InputView.readCarInput();
    const gameInput = await InputView.readGameInput();
  }
}

export default Controller;
