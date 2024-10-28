import { Console } from '@woowacourse/mission-utils';
import Race from './Race.js';
import Input from './Input.js';

class App {
  async run() {
    const cars = await Input.inputCars();
    const attemptCount = await Input.inputAttemptCount();
    Race.runRaceRounds(cars, attemptCount);
    this.printWinner(cars);
  }

  printWinner(cars) {
    const winners = Race.getRaceWinner(cars);
    Console.print(`최종 우승자 : ${winners.map(car => car.name).join(', ')}`);
  }
}

export default App;
