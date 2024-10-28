import ERROR from '../../constants/Error.js';

export default class TargetRoundValidation {
  static validateTargetRoundIsInteger (targetRound) {
    if (!Number.isInteger(targetRound)) {
      throw new Error(ERROR.TARGET_ROUND_NOT_INTEGER);
    }
  }

  static validateTargetRoundIsNegative (targetRound) {
    if (targetRound <= 0) {
      throw new Error(ERROR.TARGET_ROUND_MIN);
    }
  }

  static validateTargetRound (targetRound) {
    TargetRoundValidation.validateTargetRoundIsInteger(targetRound);
    TargetRoundValidation.validateTargetRoundIsNegative(targetRound);
  }
}
