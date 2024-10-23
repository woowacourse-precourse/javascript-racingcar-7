import { Console } from '@woowacourse/mission-utils';

export const View = {
  async getInput(promptMessage) {
    return await Console.readLineAsync(promptMessage);
  },

  printMessage(message) {
    Console.print(message);
  },

  printCarPositions(cars) {
    cars.forEach((car) => Console.print(car.toString()));
  },

  printWinners(winners) {
    const winnerMessage =
      winners.length === 1
        ? `최종 우승자 : ${winners[0]}`
        : `최종 우승자 : ${winners.join(', ')}`;
    Console.print(winnerMessage);
  },
};
