
export const GAP = " ";
export const MIN_RANDOM_NUMBER = 0;
export const MAX_RANDOM_NUMBER = 9;
export const LETTER_ONLY_REGEX = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;

export const RUN_MESSAGE = {
  INPUT_ATTEMPTS_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  INPUT_CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
};

export const CAR_RACE = {
  COLON: " : ",
  CAR_MOVE: "-",
  NEW_LINE: "\n",
  MOVE_THRESHOLD: 4,
  RUN_RESULT: "\n실행 결과",
  FINAL_WINNER: "최종 우승자 : ",
};

export const ERROR_MESSAGES = {
  DUPLICATE_CAR_NAMES: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
  CAR_NAME_TOO_LONG: "[ERROR] 경주할 자동차 이름은 5자 이하여야 합니다.",
  EMPTY_STRING: "[ERROR] 자동차 이름 목록에 빈 문자열이 포함되어 있습니다.",
  ATTEMPTS_MUST_BE_NUMERIC: "[ERROR] 시도 횟수는 숫자로 작성해야합니다.",
  INVALID_NAME_SEPARATOR: "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해야합니다.",
  MINIMUM_TWO_CARS_REQUIRED: "[ERROR] 경주할 자동차는 2개 이상이여야 진행할 수 있습니다.",
  NAME_MUST_BE_KOREAN_OR_ENGLISH: "[ERROR] 자동차 이름은 한글 또는 영어로 작성해야합니다.",
};
