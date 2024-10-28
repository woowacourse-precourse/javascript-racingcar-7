import { Console } from '@woowacourse/mission-utils';

export async function getInput(promptMessage) {
  return Console.readLineAsync(promptMessage);
}

export function printMessage(message) {
  Console.print(message);
}

export function printCarPositions(cars) {
  cars.forEach((car) => printMessage(car.toString())); // printMessage 재사용
}

export function printWinners(winners) {
  const winnerMessage = `최종 우승자 : ${winners.join(', ')}`;

  printMessage(winnerMessage); // printMessage 재사용
}
