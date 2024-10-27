export const MAX_CARS = 10;
export const MAX_CAR_NAME_LENGTH = 5;
export const MAX_ATTEMPTS = 100;

export const MIN_RANDOM_VALUE = 0;
export const MAX_RANDOM_VALUE = 9;
export const MOVE_THRESHOLD = 4; // 전진 기준값

export const DELIMITERS = {
    CAR_NAME: ',',
    WINNER: ', ',
};

export const INFO_MESSAGES = {
    RACE_TITLE: '\n실행결과\n',
    WINNER_TEXT: '최종 우승자 :',
    CAR_NAME_PROMPT: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    ATTEMPT_COUNT_PROMPT: '시도할 횟수는 몇 회인가요?\n',
};

export const ERROR_MESSAGES = {
    TOO_MANY_CARS: '[ERROR] 자동차는 최대 10대까지 등록 가능합니다.',
    EMPTY_CAR_NAME: '[ERROR] 자동차 이름으로 공백은 허용되지 않습니다.',
    CAR_NAME_TOO_LONG: '[ERROR] 모든 자동차 이름은 5자 이하여야 합니다.',
    DUPLICATE_CAR_NAME: '[ERROR] 중복되는 자동차 이름이 있습니다.',
    INVALID_ATTEMPT_NUMBER: '[ERROR] 시도 횟수는 숫자여야 합니다.',
    ATTEMPT_TOO_LOW: '[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.',
    ATTEMPT_NOT_INTEGER: '[ERROR] 시도 횟수는 실수가 될 수 없습니다.',
    ATTEMPT_TOO_HIGH: '[ERROR] 시도 횟수는 최대 100회까지 가능합니다.',
}