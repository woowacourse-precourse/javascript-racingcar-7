const ERROR_PREFIX = '[ERROR]';

export const ERROR = Object.freeze({
  EMPTY_STRING: `${ERROR_PREFIX} 자동차 이름을 입력해 주세요`,
  MIN_CAR_NUMBER: `${ERROR_PREFIX} 자동차 이름은 최소 2개 이상 입력해 주세요`,
  MAX_CAR_NUMBER: `${ERROR_PREFIX} 자동차의 개수는 1000개 이하로 입력해 주세요`,
  CONFLICTING_CAR_NAME: `${ERROR_PREFIX} 중복되지 않은 자동차 이름을 입력해 주세요`,
  CAR_NAME_LENGTH: `${ERROR_PREFIX} 자동차 이름은 5글자 이하로 입력해 주세요`,
  MIN_TRY_NUMBER: `${ERROR_PREFIX} 시도 횟수는 1회 이상 입력해 주세요`,
  MAX_TRY_NUMBER: `${ERROR_PREFIX} 시도 횟수는 10000회 이하로 입력해 주세요`,
  INTEGER_TRY_NUMBER: `${ERROR_PREFIX} 시도 횟수는 정수로 입력해 주세요`,
});

export const INPUT = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_NUMBER: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT = Object.freeze({
  EXECUTION_RESULT: '실행 결과',
  WINNERS: '최종 우승자 : ',
});

export const DASH = '-';
