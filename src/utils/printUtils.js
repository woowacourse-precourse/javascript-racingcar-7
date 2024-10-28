import { Console } from '@woowacourse/mission-utils';

const printMessage = (message) => {
  Console.print(message);
};

const printRoundStatus = (cars) => {
  for (const car of cars) {
    printMessage(`$${car.name} : ${'-'.repeat(car.position)}`);
  }
  printMessage('');
};

const printWinners = (winners) => {
  printMessage(`최종 우승자 : ${winners.join(', ')}`);
};

export { printMessage, printRoundStatus, printWinners };
