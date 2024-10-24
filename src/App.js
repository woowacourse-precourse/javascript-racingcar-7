import checkWinner from './utils/checkWinner.js';
import createCarList from './utils/createCarList.js';

class App {
  async run() {
    const UserInput = ['test1', 'test2', 'test3'];

    const carList = createCarList(UserInput);

    for (let i = 0; i < 10; i++) {
      carList.forEach((car) => {
        car.actionOneTurn();
      });
    }

    const winner = checkWinner(carList);
  }
}

export default App;
