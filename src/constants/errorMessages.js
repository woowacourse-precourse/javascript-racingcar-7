import { MAX_COUNT } from './count';

export const INPUT_ERROR = Object.freeze({
  EMPTY_STRING: '빈 문자열이 입력되었습니다.',
  CAR_NAME_TOO_LONG: '자동차 이름은 5자 이하로 입력해주세요.',
  INVALID_NUMBER: '유효하지 않은 숫자입니다.',
  NEGATIVE_NUMBER: '음수는 입력할 수 없습니다.',
  COUNT_TOO_BIG: `${MAX_COUNT} 이하로 입력 가능합니다.`,
});
