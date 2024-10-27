const INPUT_MESSAGE = {
  ENTER_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
};

const ERROR_MESSAGE = {
  NAME_TOO_SHORT: "[ERROR] 자동차 이름의 길이는 1자 이상이어야 합니다.",
  NAME_TOO_LONG: "[ERROR] 자동차 이름의 길이는 5자 이하여야 합니다.",
  SPECIAL_CHARACTERS_NOT_ALLOWED:
    "[ERROR] 자동차 이름에는 특수문자가 포함될 수 없습니다.",
  ONLY_ENGLISH_AND_KOREAN_ALLOWED:
    "[ERROR] 자동차 이름은 한글이나 영어만 가능합니다.",
  DUPLICATE_NAME_NOT_ALLOWED: "[ERROR] 자동차 이름은 중복이 불가능합니다.",
  CAR_LIST_TOO_SMALL: "[ERROR] 자동차 개수는 2대 이상이어야 합니다.",
};

export { INPUT_MESSAGE, ERROR_MESSAGE };
