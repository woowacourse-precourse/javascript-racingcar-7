// 기존 에러 메시지 관련 상수
export const ERROR_PREFIX = '[ERROR] ';

export const ERROR_MESSAGES = {
  NO_CARS: '인식된 자동차가 없습니다.',
  INVALID_COMMA: '쉼표가 적절히 작성되지 않았습니다.',
  NAME_TOO_LONG: '자동차 이름은 5자 이하만 가능합니다.',
  NOT_A_NUMBER: '숫자가 아닌 값을 입력하셨습니다.',
  NEGATIVE_NUMBER: '양수만 입력하실 수 있습니다.',
  NOT_INTEGER: '정수가 아닌 값을 입력하셨습니다.',
};

// 게임 관련 상수
export const GAME_CONSTANTS = {
  CAR_NAME: {
    MAX_LENGTH: 5,
  },
  RANDOM: {
    MIN: 0,
    MAX: 9,
    FORWARD_THRESHOLD: 4,
  },
  DISPLAY: {
    PROGRESS_MARK: '-',
    DELIMITER: ',',
  },
};

export const createError = message => new Error(`${ERROR_PREFIX}${message}`);
