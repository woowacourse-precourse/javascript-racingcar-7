import { Console, Random } from '@woowacourse/mission-utils';
import { FORWARD_DASH, SYSTEM_MESSAGE } from './constants.js';

class App {
  async run() {
    await this.enterInput();

    Console.print(SYSTEM_MESSAGE.RESULT);
    this.generateRandomNumber();
    this.printWinner();
  }

  async enterInput() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    this.namesArray = namesString.split(',');

    this.carsForward = this.namesArray.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {});

    this.count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);
  }

  carsMoveForward() {
    for (let i = 0; i < this.count; i++) {
      this.namesArray.forEach(element => {
        if (Random.pickNumberInRange(0, 9) >= 4) this.carsForward[element] += 1;

        Console.print(`${element} : ${FORWARD_DASH.repeat(this.carsForward[element])}`);
      });

      Console.print('');
    }
  }

  printWinner() {
    const winners = Object.keys(this.carsForward).filter(
      key => this.carsForward[key] === Math.max(...Object.values(this.carsForward)),
    );

    Console.print(`${SYSTEM_MESSAGE.WINNER}${winners.join(', ')}`);
  }
}

export default App;
