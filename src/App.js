import getCarNamesInput from './getCarNamesInput.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
  }
}

export default App;
