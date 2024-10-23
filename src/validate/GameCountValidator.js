import MESSAGE from '../constant/MESSAGE.js';

class GameCountValidator {
  validateGameCount(gameCount) {
    if (/[^\d]/.test(gameCount)) {
      throw new Error(MESSAGE.GAME_ROUND_ERROR);
    }
  }
}
export default GameCountValidator;
