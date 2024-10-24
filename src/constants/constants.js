const GAME_ATTEMPT_RANGE = object.freeze({
  MIN: 1,
  MAX: 5,
});

const NAME_LENGTH_RANGE = object.freeze({
  MIN: 1,
  MAX: 5,
});

const PARTICIPANT_COUNT_RANGE = object.freeze({
  MIN: 2,
  MAX: 5,
});

const VALID_USERNAME_REGEX = /^[A-Za-z0-9\-_]+$/;

const VALIDATION_ERROR_MESSAGE = object.freeze({
  GAME_ATTEMPT: `게임 시도 횟수는 ${GAME_ATTEMPT_RANGE.MIN}이상 ${GAME_ATTEMPT_RANGE.MAX}이하의 자연수만 가능합니다.`,
  NAME_LENGTH: `참가자 이름은 ${NAME_LENGTH_RANGE.MIN}자 이상 ${NAME_LENGTH_RANGE.MAX}자 이하만 가능합니다.`,
  PARTICIPANT_COUNT: `참가자는 ${PARTICIPANT_COUNT_RANGE.MIN}명 이상 ${PARTICIPANT_COUNT_RANGE.MAX}명 이하만 가능합니다.`,
});

export {
  GAME_ATTEMPT_RANGE,
  NAME_LENGTH_RANGE,
  PARTICIPANT_COUNT_RANGE,
  VALID_USERNAME_REGEX,
  VALIDATION_ERROR_MESSAGE,
};
