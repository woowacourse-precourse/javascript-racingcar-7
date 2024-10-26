const GAME_ATTEMPT_RANGE = Object.freeze({
  MIN: 1,
  MAX: 5,
});

const NAME_LENGTH_RANGE = Object.freeze({
  MIN: 1,
  MAX: 5,
});

const PARTICIPANT_COUNT_RANGE = Object.freeze({
  MIN: 2,
  MAX: 5,
});

const VALID_USERNAME_REGEX = /^[A-Za-z0-9\-_]+$/;
const REMOVE_ALL_SPACES_REGEX = /(\s*)/g;

const VALIDATION_ERROR_MESSAGE = Object.freeze({
  INCLUDE_EMPTY_SPACE: '입력값 중 빈 문자열 혹은 공란이 포함되어있습니다.',
  IS_NOT_POSITIVE_INTEGER: '입력값은 양의 정수값이 아닙니다.',
  GAME_ATTEMPT_OUT_OF_RAGNE: `게임 시도 횟수는 ${GAME_ATTEMPT_RANGE.MIN}이상 ${GAME_ATTEMPT_RANGE.MAX}이하의 자연수만 가능합니다.`,
  NAME_LENGTH_OUT_OF_RANGE: `참가자 이름은 ${NAME_LENGTH_RANGE.MIN}자 이상 ${NAME_LENGTH_RANGE.MAX}자 이하만 가능합니다.`,
  PARTICIPANT_COUNT_OUT_OF_RANGE: `참가자는 ${PARTICIPANT_COUNT_RANGE.MIN}명 이상 ${PARTICIPANT_COUNT_RANGE.MAX}명 이하만 가능합니다.`,
  INVALID_NAME_FORMAT:
    '참가자 이름은 영문 대소문자, 숫자, 하이픈("_"), 언더스코어("_")만 포함해야합니다.',
});

export {
  GAME_ATTEMPT_RANGE,
  NAME_LENGTH_RANGE,
  PARTICIPANT_COUNT_RANGE,
  VALID_USERNAME_REGEX,
  REMOVE_ALL_SPACES_REGEX,
  VALIDATION_ERROR_MESSAGE,
};
