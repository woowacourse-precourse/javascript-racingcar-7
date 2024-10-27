import { MESSAGE } from './constant';
import { readUserInput } from './util/io.js';

class App {
  async run() {
    const input = await readUserInput(MESSAGE.PROMPT_NAME_USER_INPUT);
  }
}

export default App;
