import MESSAGE from '../constants/MESSAGE.js';

class GameCountValidator {
  runAllFunction(gameCount) {
    this.validateGameCount(gameCount);
    this.validateBlankCount(gameCount);
  }

  validateGameCount(gameCount) {
    if (/[^\d]/.test(gameCount)) {
      throw new Error(MESSAGE.GAME_ROUND_ERROR);
    }
  }

  validateBlankCount(gameCount) {
    if (gameCount === '') {
      throw new Error(MESSAGE.GAME_ROUND_ERROR);
    }
  }
}
export default GameCountValidator;
