import ViewIn from './InputView.js';
import Model from './Model.js';

class Controller {
  InputView;

  model;

  constructor() {
    this.InputView = new ViewIn();
    this.model = new Model();
  }

  async control() {
    const userInputObject = await this.InputView.getUserInputObject();

    this.model.makeCar(userInputObject.carList);
  }
}

export default Controller;
