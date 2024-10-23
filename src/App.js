import { getInputCar } from './Input/carName.js';
import { getInputCount } from './Input/gameCount.js';

class App {
  async run() {
    const inputCarName = await getInputCar();
    const inputGameCount = await getInputCount();
  }
}

export default App;
