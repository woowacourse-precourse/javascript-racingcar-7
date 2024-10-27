import RacingModule from './racing/racing.module.js';

class App {
  // eslint-disable-next-line class-methods-use-this, no-empty-function
  async run() {
    RacingModule.init();
  }
}

export default App;
