const ERROR_MESSAGES = {
  TRY_CNT_MUST_BE_POSITIVE_INTEGER: '시도 횟수는 1 이상의 정수만 가능합니다.',
  CAR_NAME_MUST_BE_UNDER_FIVE_CHARACTERS: '자동차 이름은 5자 이하만 가능합니다.',
};

const IO_MESSAGES = {
  INPUT_CAR_NAMES: '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_CNT: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_TRY_RESULT: '\n실행 결과',
  OUTPUT_WINNER: '최종 우승자 : ',
};

export { ERROR_MESSAGES, IO_MESSAGES };
