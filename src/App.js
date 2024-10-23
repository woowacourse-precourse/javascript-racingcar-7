import getRacingCarsNameInput from './cars/getRacingCarsNameInput.js';

class App {
  async run() {
    const racingCarsNameInput = await getRacingCarsNameInput();
  }
}

export default App;
