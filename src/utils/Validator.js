import RACING_VARIABLES from '../constants/RacingVariables.js';

class Validator {

  validateNameLength(names) {
    names.forEach(name => {
      if (name.length > 5) {
        throw new Error(`[ERROR]: 이름 "${name}"이 5자를 초과했습니다.`);
      }
    });
  }

  validateRound(count) {
    if (count > RACING_VARIABLES.MAXIMUM_ROUND) {
      throw new Error(`[ERROR]: 최대 라운드 횟수 "${RACING_VARIABLES.MAXIMUM_ROUND}"회를 초과했습니다.`);
    }
  }
}

export default Validator;