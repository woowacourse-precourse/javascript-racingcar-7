export const PROMPT_MESSAGE =
    {
        FIRST: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
        SECOND: "시도할 횟수는 몇 회인가요?\n"
    }

export const OUTPUT_MESSAGE =
    {
        ERROR: {
            FIRST_PROMPT: {
                HAS_EMPTY: "[ERROR]: 자동차 이름이 빈값 입니다.",
                IS_SPACING: "[ERROR]: 자동차 이름은 공백이 될 수 없습니다.",
                IS_DUPLICATION: "[ERROR]: 자동차 이름은 중복 될 수 없습니다.",
                HAS_SPACING: "[ERROR]: 자동차 이름 앞뒤엔 공백이 들어 갈 수 없습니다.",
                IS_MAX: "[ERROR]: 자동차 이름은 5자 이하여야 합니다.",
            },
            SECOND_PROMPT: {
                HAS_POINT: "[ERROR]: 소수점은 입력이 안됩니다.",
                IS_NUMBER: "[ERROR]: 숫자만 입력이 가능합니다.",
                HAS_EMPTY: "[ERROR]: 빈값은 인력할 수 없습니다.",
                IS_SPACING: "[ERROR]: 공백은 입력할 수 없습니다.",
                HAS_SPACING: "[ERROR]: 앞뒤에 공백이 들어 갈 수 없습니다.",
            },
            UNKNOWN: "[ERROR]: 알수 없는 오류가 발생했습니다."
        },
        WINNER: "최종 우승자 : ",
        RESULT: "실행결과"
    }
