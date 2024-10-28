export const CAR_NAME_MAX_LENGTH = 5;

export const ERROR_MESSAGE = {
  EMPTY_INPUT: "필수 입력 값입니다.\n항목을 입력해 주세요.\n",
  SINGLE_CAR_NAME:
    "자동차 경주에는 두 개 이상의 자동차 이름이 필요합니다.\n쉼표(,)를 기준으로 두 개 이상의 이름을 입력해주세요.\n",
  MAX_LENGTH_EXCEEDED: `각각의 자동차 이름은 ${CAR_NAME_MAX_LENGTH}글자 이하로 이루어져야 합니다.\n`,
  INVALID_NUMBER: "시도할 횟수는 1 이상의 숫자여야 합니다.\n",
};
