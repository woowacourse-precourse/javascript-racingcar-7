import checkWinner from './utils/checkWinner.js';
import createCarList from './utils/createCarList.js';
import runCarRacing from './utils/runCarRacing.js';

class App {
  async run() {
    const UserInput1 = ['test1', 'test2', 'test3'];
    const UserInput2 = 10;

    const carList = createCarList(UserInput1);

    runCarRacing(carList, UserInput2);

    const winner = checkWinner(carList);
  }
}

export default App;
