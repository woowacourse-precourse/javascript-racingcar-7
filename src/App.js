import Car from './Car.js';
import checkWinner from './utils/checkWinner.js';

class App {
  async run() {
    const UserInput = ['test1', 'test2', 'test3'];

    const carList = UserInput.map((name) => {
      return new Car(name);
    });

    for (let i = 0; i < 10; i++) {
      carList.forEach((car) => {
        car.actionOneTurn();
      });
    }

    const winner = checkWinner(carList);
  }
}

export default App;
