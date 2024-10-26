import Input from './io/Input.js';

class App {
  async run() {
    const carName = await Input.getCarName();
    const tryNumber = await Input.getTryNumber();
  }
}

export default App;
