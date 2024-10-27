const ERROR_MESSAGE = Object.freeze({
  INPUT_VALIDATION: '[ERROR] 입력이 비어 있습니다.',
  DELIMITER_VALIDATION: '[ERROR] 구분자는 쉼표(,)여야 합니다.',
  CAR_NAME_VALIDATION: '[ERROR] 자동차 이름은 공백이 될 수 없습니다.',
  CAR_NAME_LENGTH_VALIDATION:
    '[ERROR] 자동차 이름은 5글자 이하로 입력해주세요.',
  CAR_NAME_DUPLICATION: '[ERROR] 자동차 이름은 중복될 수 없습니다',
  ATTEMPT_TIMES_TYPE_VALIDATION: '[ERROR] 시도할 횟수는 숫자여야 합니다.',
  ATTEMPT_TIMES_VALIDATION: '[ERROR] 시도할 횟수는 1 이상의 값이어야 합니다.',
});

export default ERROR_MESSAGE;
