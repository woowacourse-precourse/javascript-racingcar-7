export const ERROR_MESSAGE = {
  EMPTY_NAME: "자동차의 이름이 없어요.",
  OVER_NAME_LENGTH: "자동차 이름의 글자수는 5자 이하여야 해요.",
  NAN_NUMBER: "유효하지 않은 숫자예요.",
  NONE_POSITIVE_NUMBER: "시도 횟수는 양수여야 해요.",
  NONE_WINNER_LIST: "우승자가 존재하지 않아요.",
  OVER_MAX_TURN: "시도 횟수는 10번 이하여야 해요.",
  ONLY_SINGLE_PLAYER: "플레이어는 2명 이상이어야 해요.",
  OVER_MAX_PLAYER: "플레이어는 5명 이하여야 해요.",
};

export function handleError(error) {
  const formatErrorMessage = `[ERROR] ${error.message}`;
  throw new Error(formatErrorMessage);
}
