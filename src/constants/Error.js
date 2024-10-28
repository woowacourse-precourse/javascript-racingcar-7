const ERROR = Object.freeze({
  IMPLEMENTED: 'Method not implemented',
  INPUT_IS_NULL: '[ERROR] 입력값은 빈 값일 수 없습니다.',
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.',
  CAR_NAME_DUPLICATE: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  TARGET_ROUND_NOT_INTEGER: '[ERROR] 시도 횟수는 정수 형태의 숫자여야 합니다.',
  TARGET_ROUND_MIN: '[ERROR] 시도 횟수는 1 이상이어야 합니다.',
});

export default ERROR;
