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

export function displayCarMovement(carDataList, moveValue) {
  for (let i = 0; i < moveValue.length; i++) {
    Console.print(`${carDataList[i].name} : ${'_ '.repeat(moveValue[i])}`);
  }
  Console.print('\n');
}

export function announceWinner(winner) {
  if (winner.length > 1) winner = winner.join(', ');
  Console.print(`${GAME_PROGRESS_MESSAGE.FINAL_WINNER} : ${winner}`);
}
