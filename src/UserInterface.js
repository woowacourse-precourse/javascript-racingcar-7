import { Console } from '@woowacourse/mission-utils';
import { GAME_PROGRESS_MESSAGE } from './Message.js';

export async function inputCarNames() {
  return await Console.readLineAsync(
    `${GAME_PROGRESS_MESSAGE.ENTER_CAR_NAMES}\n`
  );
}

export async function inputNumberOfMove() {
  return await Console.readLineAsync(
    `${GAME_PROGRESS_MESSAGE.ENTER_TRIAL_COUNT}\n`
  );
}

export function displayCarMovement(carDataList) {
  for (let i = 0; i < carDataList.length; i++) {
    Console.print(
      `${carDataList[i].name} : ${'- '.repeat(carDataList[i].totalMoveValue)}`
    );
  }
  Console.print('\n');
}

export function announceWinner(winner) {
  if (winner.length > 1) winner = winner.join(', ');
  Console.print(`${GAME_PROGRESS_MESSAGE.FINAL_WINNER} : ${winner}`);
}
