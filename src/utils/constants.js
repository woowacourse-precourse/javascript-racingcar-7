export const MESSAGE = Object.freeze({
    INPUT_CAR_NAMES : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    INPUT_PLAY_TIME : '시도할 횟수는 몇 회인가요?\n',
    DISPLAY_END_OF_START : '\n실행결과',
    DISPLAY_EMPTY_LINE : '',
    DISPLAY_WINNER : '최종 우승자 : '
});

export const ERROR = Object.freeze({
    ERROR_EMPTY_INPUT: '입력값은 비어있을 수 없습니다.',
    ERROR_STARTS_WITH_COMMA: '입력값은 ,로 시작할 수 없습니다.',
    ERROR_ENDS_WITH_COMMA: '입력값은 ,로 끝날 수 없습니다.',
    ERROR_DUPLICATED_COMMA: '입력값에 중복된 ,가 있습니다.',
    ERROR_NAME_TOO_LONG: '이름의 길이는 5글자 이내로 입력해주세요.',
    ERROR_DUPLICATED_NAME: '중복된 이름입력이 존재합니다.',
    ERROR_INVALID_ATTEMPT_COUNT: '입력은 양의 정수만 가능합니다.',
});