import MainTest from './controllers/MainTest.js';
import { StartMessage } from './view/ConsoleView.js';
import { userInput } from './controllers/userInput.js';
import gameController from './controllers/gameController.js';
import { createCarList } from './utils/createCarList.js';

class App {
  async run() {
    try {
      StartMessage();
      const { carNames, parsedTryNumber } = await userInput();
      const carList = createCarList(carNames);
      gameController(carList, parsedTryNumber);
    } catch(error) {
      throw error;
    }
  }
}

export default App;

