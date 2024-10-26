export const ERROR_MESSAGES = {
  NO_CARS: '자동차가 최소 1대 이상 있어야 합니다.',
  EMPTY_NAME: '자동차 이름은 빈 문자열이나 공백일 수 없습니다.',
  NAME_TOO_LONG: '자동차 이름은 5자 이하만 가능합니다.',
  DUPLICATE_NAME: '자동차 이름은 중복될 수 없습니다.',

  EMPTY_ROUNDS: '시도 횟수는 빈 값이나 공백일 수 없습니다.',
  NOT_A_NUMBER: '시도 횟수는 숫자여야 합니다.',
  NEGATIVE_NUMBER: '시도 횟수는 음수일 수 없습니다.',
  ZERO_ROUNDS: '시도 횟수는 0일 수 없습니다.',
  NOT_INTEGER: '시도 횟수는 정수여야 합니다.',
  OVERFLOW: `시도 횟수는 ${Number.MAX_SAFE_INTEGER}보다 작거나 같아야 합니다.`,
};
