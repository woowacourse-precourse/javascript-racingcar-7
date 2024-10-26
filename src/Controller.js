import view from './view.js';

class Controller {
  async play() {
    const cars = await view.readCars();
  }
}

export default Controller;
