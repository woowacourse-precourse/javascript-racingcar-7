import { ERROR_MESSAGE } from '../constants/Message.js';
import { GAME_SETTINGS, SYMBOLS } from '../constants/Symbol.js';

export default function validateAttempt(roundAttempt) {
  if (roundAttempt === SYMBOLS.EMPTY) {
    throw new Error(ERROR_MESSAGE.EMPTY_ATTEMPT);
  }

  if (Number.isNaN(roundAttempt)) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  }

  if (Number.isInteger(roundAttempt) === false) {
    throw new Error(ERROR_MESSAGE.NOT_AN_INTEGER);
  }

  if (roundAttempt < GAME_SETTINGS.MINIMUM_ATTEMPT) {
    throw new Error(ERROR_MESSAGE.LESS_THAN_ONE);
  }
}
