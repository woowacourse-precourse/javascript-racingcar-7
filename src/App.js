import { getCarList, getRound } from './utils/userInput.js';
class App {
  async run() {
    const carList = await getCarList();
    const round = await getRound();
  }
}

export default App;
