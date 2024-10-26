const PRINT_MESSAGE = Object.freeze({
    inputName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    inputTries: "시도할 횟수는 몇 회인가요?\n",
    resultMessage: "\n실행 결과",
    winnerMessage: "최종 우승자 : ",
    moveMarking: "-",
});

const ERROR_MESSAGE = Object.freeze({
    // 자동차 이름 관련 에러
    name: {
        EMPTY: "[ERROR] 자동차 이름이 입력되지 않았습니다.",
        LENGTH: "[ERROR] 자동차의 이름은 5자를 넘어갈 수 없습니다.",
        DUPLICATE: "[ERROR] 자동차의 이름은 중복될 수 없습니다.",
        MIN_COUNT: "[ERROR] 자동차의 이름을 한 개이상 입력해야합니다.",
        INVALID_FORMAT: "[ERROR] 자동차 이름이 올바르지 않은 형식입니다.",
        BLANK: "[ERROR] 자동차 이름에 빈 값이 포함되어 있습니다.",
    },
    // 시도 횟수 관련 에러
    attempts: {
        NOT_NUMBER: "[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.",
        ZERO_OR_NEGATIVE: "[ERROR] 시도할 횟수는 0보다 커야 합니다.",
        EMPTY: "[ERROR] 시도할 횟수가 입력되지 않았습니다.",
        TOO_LARGE: "[ERROR] 시도할 횟수가 너무 큽니다.",
    }
});

const STATIC_NUMBER = Object.freeze({
    name: {
        MAX_LENGTH: 5,
        MIN_COUNT: 2,
    },
    game: {
        MOVE_THRESHOLD: 4,
        MIN_RANDOM: 0,
        MAX_RANDOM: 9,
        MOVE_STEP: 1,
    }
});

export { PRINT_MESSAGE, ERROR_MESSAGE, STATIC_NUMBER };