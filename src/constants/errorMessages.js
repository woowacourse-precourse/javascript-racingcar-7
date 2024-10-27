export const ERROR_MESSAGE_PREFIX = "[ERROR]";

export const ERROR_MESSAGES = Object.freeze({
  emptyCarNames: `${ERROR_MESSAGE_PREFIX} 자동차 이름이 입력되지 않았습니다.`,
  invalidCarName: `${ERROR_MESSAGE_PREFIX} 유효하지 않은 자동차 이름이 입력되었습니다.(이름은 1자 이상, 5자 이하만 가능합니다.)`,
  invalidRoundCount: `${ERROR_MESSAGE_PREFIX} 유효하지 않은 시도할 횟수가 입력되었습니다.`,
});
