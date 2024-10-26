import Input from "./Input.js";

class App {
  input;

  constructor() {
    this.input = new Input();
  }

  async run() {
    await this.input.getCarString();
  }
}

export default App;
