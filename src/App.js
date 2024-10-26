import Race from './Race.js';

class App {
  async run() {
    const race = new Race();
    await race.handleCar();
    await race.handleTryNumber();
  }
}

export default App;
