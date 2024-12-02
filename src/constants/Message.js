const MESSAGE = {
  INFO: {
    CAR_NAME:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  },
  ERROR: {
    IS_EMPTY: '[ERROR] 입력값이 비었습니다.\n',
    NOT_NATURAL_NUMBER: '[ERROR] 자연수를 입력해주세요.',
    CANT_BE_NUMBER: '[ERROR] 숫자로 변환할 수 없는 값이 포함되어 있습니다.',
    IS_MAX_LENGTH: '[ERROR] 각 이름의 길이는 5자 이하여야합니다.',
    IS_MAX_TRY: '[ERROR] 시도할 수 있는 최대 횟수는 10000 이하입니다.',
    IS_NOT_RANDOM_RANGE:
      '[ERROR] 무작위 값의 결과가 예상값에서 벗어나는 오류가 발생했습니다.',
  },
};

export default MESSAGE;
