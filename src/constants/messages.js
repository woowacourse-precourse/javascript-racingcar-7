const ERROR_PREFIX = '[ERROR]';

export const GAME_MESSAGES = {
  readCarsName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  readTrialCount: '시도할 횟수는 몇 회인가요?\n',
  executeResult: '\n실행 결과',
  winner: '최종 우승자 : ',
};

export const ERROR_MESSAGES = {
  invalidNameLength: `${ERROR_PREFIX}자동차 이름은 1자에서 5자 사이만 입력할 수 있습니다.`,
  duplicatedName: `${ERROR_PREFIX}중복된 이름은 입력할 수 없습니다.`,
  trim: `${ERROR_PREFIX}이름의 양 끝엔 공백을 입력할 수 없습니다.`,
  notPositiveInteger: `${ERROR_PREFIX}횟수엔 1이상의 정수만 입력할 수 있습니다.`,
};
