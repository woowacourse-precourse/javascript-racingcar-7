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
  invalidDelimiter:
    '쉼표(,) 이외의 특수문자, 공백은 구분자로 사용할 수 없습니다.',
  invalidCarNameFormat:
    '자동차 이름은 1~5자 이하의 문자로 구성되어야 하며, 쉼표(,)로 구분되어야 합니다.',
});

export const REGEX = Object.freeze({
  isInvalidDelimiter: /[^,가-힣a-zA-Z0-9]/,
  isValidCarNameFormat: /^([가-힣a-zA-Z0-9]{1,5})(,([가-힣a-zA-Z0-9]{1,5}))*$/,
});
