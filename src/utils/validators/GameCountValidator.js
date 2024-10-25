import MESSAGE from '../constants/MESSAGE.js';
import CONSTANT from '../constants/CONSTANT.js';

class GameCountValidator {
  runAllFunction(gameCount) {
    this.validateGameCount(gameCount);
    this.validateBlankCount(gameCount);
  }

  validateGameCount(gameCount) {
    if (CONSTANT.GAME_ROUND_CONDITION.test(gameCount)) {
      throw new Error(MESSAGE.GAME_ROUND_ERROR);
    }
  }

  validateBlankCount(gameCount) {
    if (gameCount === CONSTANT.BLANK) {
      throw new Error(MESSAGE.GAME_ROUND_ERROR);
    }
  }
}
export default GameCountValidator;
