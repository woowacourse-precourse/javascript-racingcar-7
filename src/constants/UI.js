export const MESSAGE = Object.freeze({
  PLEASE_INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  PLEASE_INPUT_ITERATION_NUMBER: '시도할 횟수는 몇 회인가요?\n',
  DELIMITER: ':',
  WINNER: '최종 우승자',
  EXUTE_MESSAGE: '\n실행 결과',
});

export const WINNER_SEPERATOR = ', ';
export const POSITION_MARKER = '-';

export const ERROR_MESSAGE = Object.freeze({
  HEADER: '[ERROR]',
  WRONG_CAR_NAME: '차 이름이 잘못 되었어요! 차이름은 5글자 이내여야합니다',
  DUPLICATED: '차 이름이 중복되었어요! 차이름이 중복되지 않게 해주세요.',
  IS_NOT_NUMBER: '숫자가 아니에요! 반복횟수는 숫자로 입력해주세요!',
  IS_NOT_INTEGER: '숫자가 들어왔지만, 정수가 아니에요!',
  WRONG_INPUT: '입력에 문제가 생겼어요!',
});
