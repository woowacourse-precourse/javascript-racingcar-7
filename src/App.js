import { getCarNamesInput, getRacingCountInput } from './Views/inputView.js';

class App {
  async run() {
    await getCarNamesInput();
    getRacingCountInput();
  }
}

export default App;
