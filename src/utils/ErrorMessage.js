export const PREFIX_ERROR_MESSAGE = "[ERROR]";

export const ERROR_MESSAGE = {
    NAME_LENGTH_EXCEEDED: (maxLength, name) => `${PREFIX_ERROR_MESSAGE} 이름은 최대 ${maxLength}자까지 설정 가능합니다. (입력값: ${name})`,
    EMPTY_INPUT_NOT_ALLOW: `${PREFIX_ERROR_MESSAGE} 빈 값은 입력할 수 없습니다.`,
    ONLY_USED_ENGLISH_AND_NUMBER: (input) => `알파벳과 숫자만 입력 가능합니다. (입력값: ${input})`,
    ONLY_USED_NUMBER: (input) => `숫자만 입력할 수 있습니다. (입력값: ${input})`,
    RACING_COUNT_EXCEEDED: (maxCount, count) => `경기는 최대 ${maxCount}회 시도할 수 있습니다. (입력값: ${count})`,
}