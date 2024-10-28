const ERROR_PREFIX = '[ERROR]';

export default {
  EMPTY_NAMES_NOT_ALLOW: `${ERROR_PREFIX} 이름이 입력되지 않았습니다. 이름을 입력해주세요.`,
  NAME_LENGTH_EXCEEDED: `${ERROR_PREFIX} 이름의 길이는 5를 초과할 수 없습니다.`,
  MIN_TWO_NAMES_REQUIRED: `${ERROR_PREFIX} 이름은 최소 2개 이상 입력해주세요.`,
  COMMA_ENDING_NAMES: `${ERROR_PREFIX} 이름 입력 마지막에는 쉼표가 올 수 없습니다.`,
  UNKNOWN_INVALID_NAMES: `${ERROR_PREFIX} 알 수 없는 에러입니다. 시도 횟수 입력 내용을 확인해주세요.`,

  EMPTY_NUMBER_NOT_ALLOW: `${ERROR_PREFIX} 시도 횟수가 입력되지 않았습니다. 시도 횟수를 입력해주세요.`,
  INPUT_CONTAIN_CHARACTER: `${ERROR_PREFIX} 시도 횟수는 숫자만 입력해주세요.`,
  ZERO_NUMBER_INPUT: `${ERROR_PREFIX} 시도 횟수는 0이 될 수 없습니다. 1 이상의 정수로 입력해주세요.`,
  STARTSWITH_ZERO_FORMAT: `${ERROR_PREFIX} 시도 횟수의 첫째 자리수는 1 이상으로 입력해주세요.`,
  NEGATIVE_NUMBER_INPUT: `${ERROR_PREFIX} 시도 횟수는 음수가 입력될 수 없습니다. 1 이상의 정수로 입력해주세요.`,
  DECIMAL_NUMBER_INPUT: `${ERROR_PREFIX} 시도 횟수는 소수점을 포함한 수가 입력될 수 없습니다. 1 이상의 정수로 입력해주세요.`,
  UNKNOWN_INVALID_NUMBER: `${ERROR_PREFIX} 알 수 없는 에러입니다. 시도 횟수 입력 내용을 확인해주세요.`,

  OVER_VALID_TIMECOMPLEXITY: `${ERROR_PREFIX} 너무 많은 이름과 반복 횟수를 입력하였어요. 이름의 수를 줄이거나 반복 횟수를 줄여서 입력해주세요.`,
};
