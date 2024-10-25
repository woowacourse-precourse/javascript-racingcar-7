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
