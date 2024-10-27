export const MESSAGES = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  EXECUTION_RESULT: '\n실행 결과',
  FINAL_WINNER: (winners) => `최종 우승자 : ${winners.join(', ')}`,
};

export const ERROR_MESSAGES = {
  INVALID_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  EMPTY_CAR_NAME: '[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.',
  DUPLICATE_CAR_NAME: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  INVALID_TRY_COUNT: '[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.',
};
