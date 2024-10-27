export const START_MESSAGE = Object.freeze({
  CAR_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_NUMBER_INPUT: '시도할 횟수는 몇 회인가요?\n',
});
export const RESULT_MESSAGE = Object.freeze({
  EXECUTE: '\n실행결과',
  WINNER: '최종 우승자 :',
});
export const TRYNUMBER_ERROR = Object.freeze({
  NOT_NUMBER: '[ERROR] 입력하신 시도 횟수가 숫자가 아닙니다.',
  NOT_OVER_50: '[ERROR] 입력하신 시도 횟수가 50을 초과합니다.',
  NOT_BLANK: '[ERROR] 입력하신 시도 횟수가 없습니다.',
});

export const CAR_ERROR = Object.freeze({
  NOT_OVER_5: '[ERROR] 입력하신 자동차의 이름이 5자를 초과합니다.',
  NOT_OVER_50: '[ERROR] 입력하신 시도 횟수가 50을 초과합니다.',
  NOT_UNDER_2: '[ERROR] 입력하신 자동차의 개수가 2 이상이 아닙니다.',
  NOT_DUPLICATE: '[ERROR] 입력하신 자동차의 이름이 중복되었습니다.',
  NOT_BLANK: '[ERROR] 입력하신 자동차가 없습니다.',
});
