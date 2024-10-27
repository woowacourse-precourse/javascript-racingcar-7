import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constant/Constants';

class View {
  printMessage(message) {
    Console.print(message);
  }

  async readUserInput(input) {
    this.printMessage(input);
    return await Console.readLineAsync('');
  }

  printRacingCars(carMap) {
    carMap.forEach((car) => {
      this.printMessage(`${car.name} : ${car.position}`);
    });
    this.printMessage('');
  }

  printWinner(winnerArray) {
    this.printMessage(`${MESSAGES.OUTPUT_WINNER}${winnerArray.join(', ')}`);
  }
}

export default View;
