import { PRINT_SETTING } from "./Setting";

export const INPUT_MESSAGE = {
    CAR_NAMES_PROMPT: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    TRY_COUNT_PROMPT: "시도할 횟수는 몇 회인가요?",
};

export const PRINT_MESSAGE = {
    RESULT_TEXT: "\n실행 결과",
    TOTAL_LOGS: (logs) => `${logs.join(PRINT_SETTING.LOG_JOIN_SEPARATOR)}`,
    FINAL_WINNER: (winner) => `최종 우승자 : ${winner.join(PRINT_SETTING.WINNER_JOIN_SEPARATOR)}`,
};

export const ERROR_PREFIX = "[ERROR]";

export const CAR_NAME_ERROR = {
    OVER_LENGTH: `${ERROR_PREFIX} 자동차 이름은 5자 이하로 입력 가능합니다.`,
};

export const TRY_COUNT_ERROR = {
    NOT_NUMBER: `${ERROR_PREFIX} 시도할 횟수는 숫자로 입력해야 합니다.`,
};
