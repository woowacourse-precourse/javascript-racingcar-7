export const SYSTEM_MESSAGES = {
  INPUT_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  PRINT_RACE_START: '\n실행 결과',
  PRINT_WINNER: '\n최종 우승자 :',
};
export const ERROR_MESSAGES = {
  NOT_ENOUGH_PATICIPANTS: '[ERROR] 참가자는 두 명 이상이어야합니다.',
  INVALID_COMMA: '[ERROR] 쉼표(,)는 맨 앞, 혹은 맨 뒤에 올 수 없습니다.',
  INVALID_NAME:
    '[ERROR] 경주할 자동차 이름 입력 시 숫자, 영어, 쉼표 이외의 문자는 입력할 수 없습니다.',
  DUPLICATE_NAME: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  EXCEED_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하이어야 합니다.',
  INVALID_COUNT: '[ERROR] 시도할 횟수는 자연수만 입력해야 합니다.',
};
