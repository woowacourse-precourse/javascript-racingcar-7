import ViewIn from './ViewIn.js';
import Model from './Model.js';

class Controller {
  viewIn;

  model;

  constructor() {
    this.viewIn = new ViewIn();
    this.model = new Model();
  }

  async control() {
    const userInputObject = await this.viewIn.getUserInputObject();

    this.model.makeCar(userInputObject.carList);
  }
}

export default Controller;
