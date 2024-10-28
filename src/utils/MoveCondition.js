import { Random } from '@woowacourse/mission-utils';
import { GAME_SETTINGS } from '../constants/Symbol.js';

export default function getMoveForward() {
  const randomNumber = Random.pickNumberInRange(
    GAME_SETTINGS.MIN_RANDOM_NUMBER,
    GAME_SETTINGS.MAX_RANDOM_NUMBER,
  );
  return randomNumber >= GAME_SETTINGS.FORWARD_POINT;
}
