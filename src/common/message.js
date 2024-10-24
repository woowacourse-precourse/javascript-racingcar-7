const IO_MESSAGE = Object.freeze({
  INPUT_CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  OUTPUT_ANNOUNCE_MESSAGE: '실행 결과',
  OUTPUT_FINAL_RESULT: '최종 우승자 : ',
});

const ERROR_MESSAGE = Object.freeze({
  ERROR_EMPTY_STRING: '[ERROR] 입력 값이 비었습니다.',
  ERROR_EMPTY_CAR_NAME: '[ERROR] 자동차의 이름이 비었습니다.',
  ERROR_TOO_LONG_CAR_NAME: '[ERROR] 자동차의 이름이 6자 이상입니다.',
  ERROR_NOT_ALLOWED_CHARACTER: '[ERROR] 자동차의 이름은 한글, 영문, 숫자만 가능합니다.',
});

export { IO_MESSAGE, ERROR_MESSAGE };
