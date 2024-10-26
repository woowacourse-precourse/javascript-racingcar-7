import Input from './io/Input.js';

class App {
  async run() {
    const carName = await Input.getCarName();
  }
}

export default App;
