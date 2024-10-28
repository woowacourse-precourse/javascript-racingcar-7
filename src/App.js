import RacingModule from './racing/racing.module.js';

class App {
  async run() {
    await RacingModule.init();
  }
}

export default App;
