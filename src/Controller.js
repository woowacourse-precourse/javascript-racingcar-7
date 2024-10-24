import ViewIn from './ViewIn.js';

class Controller {
  viewIn;

  constructor() {
    this.viewIn = new ViewIn();
  }

  async control() {
    const userInputObject = await this.viewIn.getUserInputObject();
  }
}

export default Controller;
