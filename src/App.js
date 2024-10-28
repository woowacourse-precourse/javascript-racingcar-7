import RacingModule from './racing/racing.module.js';

class App {
  // eslint-disable-next-line class-methods-use-this, no-empty-function
  async run() {
    // new RacingController({
    //   models: { RacingModel: new RacingModel() },
    //   views: { RacingView: new RacingView() },
    // }).init();
    await RacingModule.init();
  }
}

export default App;
