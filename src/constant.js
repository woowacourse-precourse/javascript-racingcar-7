export const INPUT_MESSAGES = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  roundCount: '시도할 횟수는 몇 회인가요?\n',
});

export const RACE_MESSAGES = Object.freeze({
  resultTitle: '\n실행 결과',
  finalWinner: '최종 우승자 : ',
});

export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  emptyCarName: '자동차 이름을 입력해주세요.',
  emptyRoundCount: '시도 횟수를 입력해주세요.',
});

export const REGEX = Object.freeze({
  isInvalidDelimiter: /[^,가-힣a-zA-Z0-9]/,
});
