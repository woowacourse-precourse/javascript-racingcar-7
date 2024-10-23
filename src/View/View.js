import { Console } from '@woowacourse/mission-utils';
export const View = {
  async getInput(promptMessage) {
    return await Console.readLineAsync(promptMessage);
  },

  printMessage(message) {
    Console.print(message);
  },

  printCarPositions(cars) {
    cars.forEach((car) => this.printMessage(car.toString())); // printMessage 재사용
  },

  printWinners(winners) {
    let winnerMessage;

    if (winners.length === 1) {
      winnerMessage = `최종 우승자 : ${winners[0]}`; // 한 명일 때는 그대로 출력
    } else {
      winnerMessage = `최종 우승자 : ${winners.join(', ')}`; // 여러 명일 때는 join 사용
    }

    this.printMessage(winnerMessage); // printMessage 재사용
  },
};
