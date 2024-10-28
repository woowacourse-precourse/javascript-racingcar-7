const ERROR_HEADER = '[ERROR]';

export const ERROR = Object.freeze({
  TRY_NUMBER_INPUT: `${ERROR_HEADER} 시도 횟수는 숫자만 입력 가능합니다.`,
  TRY_NUMBER_RANGE: `${ERROR_HEADER} 시도 횟수는 1 이상만 가능합니다.`,

  CAR_NAME_STRING: `${ERROR_HEADER} 자동차 이름은 문자열만 가능합니다.`,
  CAR_NAME_INPUT: `${ERROR_HEADER} 자동차 이름은 5자 이하만 가능합니다.`,
  CAR_NAME_DUPLICATE: `${ERROR_HEADER} 중복된 자동차 이름이 있습니다.`,
  CAR_NAME_EMPTY: `${ERROR_HEADER} 자동차 이름은 빈 문자열이 올 수 없습니다.`,

  SEPARATOR_STRING: `${ERROR_HEADER} 구분자는 쉼표(,)만 가능합니다.`,
});
