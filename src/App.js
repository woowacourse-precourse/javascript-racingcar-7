import Controller from './controllers/Controller.js';

export default class App {
  async run() {
    await Controller.run();
  }
}
