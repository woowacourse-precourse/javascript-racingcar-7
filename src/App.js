import getUserInput from './utils/getUserInput.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';

class App {
  async run() {
    const input = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_CAR);
  }
}

export default App;
