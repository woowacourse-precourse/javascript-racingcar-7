import Input from './Input.js';

class App {
  inputHandler = new Input();

  async run() {
    const { names, repetitionNumber } = await this.inputHandler.get();
  }
}

export default App;
