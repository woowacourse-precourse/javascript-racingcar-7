import { Console } from '@woowacourse/mission-utils';

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
    this.printMessage(`최종 우승자 : ${winnerArray.join(', ')}`);
  }
}

export default View;
