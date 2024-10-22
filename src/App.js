import { userInput } from './lib/utils/user-input.js';

class App {
  async run() {
    const { cars, count } = await userInput();
  }
}

export default App;
