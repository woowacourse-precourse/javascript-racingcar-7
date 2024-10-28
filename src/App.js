import { getCarList } from './utils/userInput.js';
class App {
  async run() {
    const carList = await getCarList();
  }
}

export default App;
